import React, { useState, useEffect } from "react";
import "../styles/CropList.css";
import CropService from "../Api/CropService";
import CartService from "../Api/CartService";
import { Footer } from "../components/Footer";

function CropList() {
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch crops data
    const fetchData = async () => {
      try {
        CropService.getCrop().then(response=> // Assuming this is the correct API method
        setCrops(response.data));
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure it runs only once

  const placeOrder = (crop) => {
    alert(`Order placed for ${crop.name}`);
  };

  
  const addToCart = (crop) => {
    const t = localStorage.getItem('token');
    const decodeToken = (token) => {
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload?.user_id;
    };
  
    const buyerId = decodeToken(t);
  
    const cartDTO = {
      crop_id: crop.id,
      quantity: crop.quantity,
      totalPrice: crop.price,
    };
  
    // Correctly include buyer_id in the DTO, NOT crop_id.
    const cartData = {
      ...cartDTO,
      cart_id:buyerId,
      buyer_id: buyerId,  // Correctly use buyer_id
    };
 
    alert(`${crop.name} added to cart`);
  
    try {
      // Make the API call to add the item to the cart
      CartService.addCart(cartData)
        .then(response => {
          console.log("Cart Item Added:", response.data);
          // Handle success
        })
        .catch(err => {
          console.error("Error adding to cart:", err);
          // Handle error (e.g., display an alert or message)
        });
    } catch (err) {
      console.error("Error:", err.message || "Failed to fetch data");
      setError(err.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };
  

  if (loading) {
    return <p>Loading crops...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="crop-list">
      <p className="disclaimer">
        Disclaimer: Please contact the seller for purchasing the crops.
      </p>
      <div className="crops">
        {crops.map((crop, index) => (
          <div
            key={index}
            className="crop-item"
            style={{
              cursor: "pointer",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "10px",
              width: "50%",
            }}
          >
            <img
              src={crop.image}
              alt={crop.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderBottom: "1px solid #ddd",
              }}
            />
            <div style={{ padding: "10px" }}>
              <h3>{crop.name}</h3>
              <p>Seller: {crop.farmer_name}</p>
            
              <p>Season: {crop.season}</p>
              <div className="crop-details">
                <span>Quantity: {crop.quantity}</span>
                <span>Contact: {crop.contact}</span>
                <span>Price: {crop.price}</span>
              </div>
              <div className="modal-actions">
                <button
                  className="action-button"
                  onClick={() => placeOrder(crop)}
                >
                  Place Order
                </button>
                <button
                  className="action-button"
                  onClick={() => addToCart(crop)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CropList;
