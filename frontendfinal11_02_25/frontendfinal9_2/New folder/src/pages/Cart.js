import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CartService from "../Api/CartService";
import OrderService from "../Api/OrderService";
import { useNavigate } from 'react-router-dom';
import NavibarB from "../components/NaviBarB";
import { Footer } from "../components/Footer";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
         CartService.getCart().then(response=>setCartItems(response.data));
        
      } catch (error) {
        setError(error.message);
      }
    };
    fetch();
  }, []);

  

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
    setTotalAmount(total);
  }, [cartItems]);

  
  useEffect(() => {
    const navigateToOrder = async () => {
        if (orderId) {
            await navigate(`/order/${orderId}`);
        }
    };
    navigateToOrder();
}, [orderId, navigate]);

if (error) {
  return <p>Error: {error}</p>;
}
  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    try {
      const response = await OrderService.addOrder();
      setOrderId(response.data.id);
      setCartItems([]);
      alert("Order placed successfully for all items in the cart!");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRemoveItem = async (index, id) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    try {
      await CartService.deleteCartItem(id);
      setCartItems(updatedCart);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ margin: "0", padding: "0", display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavibarB style={{ margin: "0", padding: "0", position: "sticky", top: "0", zIndex: "10" }}>Full-Width Header</NavibarB>
      <div style={{ width: "90%", marginTop: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Your Cart</h2>
        <ul style={ulStyle}>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li key={index} style={liStyle}>
                <div>
                  <p>Name: {item.crop_name}</p> Quantity: {item.quantity}
                  <p>Price: {item.totalPrice}</p>
                </div>
                <div>
                  <button style={removeButtonStyle} onClick={() => handleRemoveItem(index, item.id)}>Remove</button>
                </div>
              </li>
            ))
          ) : (
            <p style={{ textAlign: "center" }}>Your cart is empty</p>
          )}
        </ul>
        {cartItems.length > 0 && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p><strong style={{ fontSize: "2rem" }}>Total Payable Amount: {totalAmount}</strong></p>
            <button style={{ padding: "10px 20px" }} onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}

// Styles
const ulStyle = {
  listStyleType: "none",
  padding: 0,
  margin: 80,
  width: "100%",
};

const liStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

const removeButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "5px",
  padding: "8px 16px",
  cursor: "pointer",
};

export default Cart;
