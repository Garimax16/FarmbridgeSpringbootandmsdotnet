// import buy from '../media/buy.png';
// import product from '../media/product.png';
// import enquiry from '../media/enquiry.png';
// import farmer from '../media/farmer.png';
// import buyer from '../media/buyer.png';


// function MidSection(){

// return (
//     <div>
//         <div className="mid">
//     <h4>The new way of healthy living</h4>
//     <p>FarmBridge portal is a one stop solution for facilitating organic farmers to sell their organic produce and promoting organic farming and its benefits. This portal caters various stakeholders like individual farmers, and buyers.</p>
//     <div className="mid-cards">  
//         <div className="mid-card">
            
//             <img src={farmer} width={40}/>
//             <h5>23412</h5>
//             <p>Registered Farmers</p>
//         </div>
//         <div className="mid-card">
//         <img src={buyer} width={40}/>
//             <h5>2345</h5>
//             <p>Buyers</p>
//         </div>
//     </div>
//     </div>
// <div className="features">
//     <div className="feature">
//  <img src={buy} width={100}/>
//  <h4>Fixed Price Selling</h4>
//  <p>Registered buyers can order organic products online by making online payment for the product which was set by the seller</p>
//     </div>
//     <div className="feature">
//     <img src={enquiry} width={100}/>
//  <h4>Enquiry Based Buying</h4>
//  <p>Registered buyers can place enquiry of a product and eligible sellers can place their quotes. The buyer can then buy from the qualified sellers</p>
//     </div>
    
//     <div className="feature" id="feature3">
//     <img src={product} width={100} />
//  <h4>Raising Future Demands</h4>
//  <p>Registered buyers can place their request for products which will be produced by the farmers in future</p>
//      </div>
// </div>



// </div>




// );


// }

// export default MidSection;

//-------------------------------------------------------------------

// import { useState, useEffect } from "react";
// import buy from "../media/buy.png";
// import product from "../media/product.png";
// import enquiry from "../media/enquiry.png";
// import farmer from "../media/farmer.png";
// import buyer from "../media/buyer.png";
// import axios from "axios";

// function MidSection() {
//   const [news, setNews] = useState([]);

//   // Fetch news articles related to farmer selling products
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get(
//           `https://newsapi.org/v2/everything?q=farmer%20market&apiKey=c2578922031947c89e3aecbeffcbb23b`
//         );
//         setNews(response.data.articles.slice(0, 3)); // Show top 3 news articles
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };
//     fetchNews();
//   }, []);

//   const heroStyle = {
//     background: "url('https://source.unsplash.com/1600x900/?farm,agriculture') center/cover no-repeat",
//     color: "black",
//     padding: "60px 20px",
//     textAlign: "center",
//     borderRadius: "10px",
//     textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)",
//   };

//   const sectionStyle = {
//     textAlign: "center",
//     padding: "40px 20px",
//     maxWidth: "800px",
//     margin: "auto",
//   };

//   const cardStyle = {
//     display: "flex",
//     justifyContent: "center",
//     gap: "30px",
//     marginTop: "30px",
//   };

//   const featureStyle = {
//     border: "1px solid #ddd",
//     padding: "20px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//     width: "280px",
//     backgroundColor: "#fff",
//   };

//   const newsSectionStyle = {
//     backgroundColor: "#f9f9f9",
//     padding: "40px 20px",
//     marginTop: "40px",
//   };

//   const newsCardStyle = {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//     gap: "20px",
//     justifyContent: "center",
//     marginTop: "20px",
//   };

//   const newsItemStyle = {
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     overflow: "hidden",
//     transition: "transform 0.3s",
//   };

//   const newsImageStyle = {
//     width: "100%",
//     height: "180px",
//     objectFit: "cover",
//   };

//   const newsContentStyle = {
//     padding: "15px",
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <div style={heroStyle}>
//         <h1>🌿 The Future of Organic Farming</h1>
//         <p>Connecting Farmers & Buyers for Sustainable Agriculture.</p>
//       </div>

//       {/* Mid Section */}
//       <div style={sectionStyle}>
//         <h4>The new way of healthy living</h4>
//         <p>
//           FarmBridge portal is a one-stop solution for organic farmers to sell
//           their produce and promote organic farming. This portal caters to
//           various stakeholders like individual farmers and buyers.
//         </p>

//         <div style={cardStyle}>
//           <div style={featureStyle}>
//             <img src={farmer} width={40} alt="Farmer" />
//             <h5>23,412</h5>
//             <p>Registered Farmers</p>
//           </div>
//           <div style={featureStyle}>
//             <img src={buyer} width={40} alt="Buyer" />
//             <h5>2,345</h5>
//             <p>Buyers</p>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div style={cardStyle}>
//         <div style={featureStyle}>
//           <img src={buy} width={100} alt="Buy" />
//           <h4>Fixed Price Selling</h4>
//           <p>
//             Buyers can order organic products online at a fixed price set by
//             the seller.
//           </p>
//         </div>

//         <div style={featureStyle}>
//           <img src={enquiry} width={100} alt="Enquiry" />
//           <h4>Enquiry-Based Buying</h4>
//           <p>
//             Buyers can place an enquiry, and sellers can submit their quotes.
//           </p>
//         </div>

//         <div style={featureStyle}>
//           <img src={product} width={100} alt="Product" />
//           <h4>Future Demand Requests</h4>
//           <p>
//             Buyers can request products that farmers will produce in the future.
//           </p>
//         </div>
//       </div>

//       {/* News Section */}
//       <div style={newsSectionStyle}>
//         <h3>📰 Recent News in Farming</h3>
//         <div style={newsCardStyle}>
//           {news.length > 0 ? (
//             news.map((article, index) => (
//               <div
//                 key={index}
//                 style={{ ...newsItemStyle, cursor: "pointer" }}
//                 onClick={() => window.open(article.url, "_blank")}
//               >
//                 <img
//                   src={article.urlToImage || "https://via.placeholder.com/300"}
//                   alt={article.title}
//                   style={newsImageStyle}
//                 />
//                 <div style={newsContentStyle}>
//                   <h4>{article.title}</h4>
//                   <p style={{ fontSize: "14px", color: "#555" }}>
//                     {article.description ? article.description.slice(0, 100) + "..." : "No description available"}
//                   </p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>Loading news...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MidSection;

import { useState, useEffect } from "react";
import buy from "../media/buy.png";
import product from "../media/product.png";
import enquiry from "../media/enquiry.png";
import farmer from "../media/farmer.png";
import buyer from "../media/buyer.png";
import axios from "axios";

function MidSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=farmer%20market&apiKey=c2578922031947c89e3aecbeffcbb23b`
        );
        setNews(response.data.articles.slice(0, 3));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  // Hero Section
  const heroStyle = {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/1600x900/?farm,agriculture')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    color: "white",
    padding: "100px 20px",
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  };

  // Section Styles
  const sectionStyle = {
    textAlign: "center",
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "auto",
  };

  // Card Container
  const cardContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px",
  };

  // Feature Card
  const featureCard = {
    border: "1px solid #e0e0e0",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "220px", // Reduced width
    backgroundColor: "#fff",
    transition: "all 0.3s ease",
    cursor: "pointer",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    },
  };

  // News Section
  const newsSectionStyle = {
    backgroundColor: "#f8f9fa",
    padding: "60px 20px",
    marginTop: "40px",
    textAlign: "center",
  };

  // News Grid
  const newsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Adjusted for smaller cards
    gap: "20px",
    maxWidth: "1100px",
    margin: "auto",
    padding: "20px",
  };

  // News Card
  const newsCardStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "all 0.3s ease",
    cursor: "pointer",
    ":hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    },
  };

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <div style={heroStyle}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bold" }}>
          🌿 The Future of Organic Farming
        </h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Connecting Farmers & Buyers for Sustainable Agriculture.
        </p>
        <button
          style={{
            backgroundColor: "#2ecc71",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            ":hover": {
              backgroundColor: "#27ae60",
            },
          }}
        >
          Explore Now
        </button>
      </div>

      {/* Mid Section */}
      <div style={sectionStyle}>
        <h4 style={{ fontSize: "2rem", color: "#333", marginBottom: "20px", fontWeight: "bold" }}>
          The New Way of Healthy Living
        </h4>
        <p style={{ fontSize: "1rem", color: "#666", maxWidth: "800px", margin: "0 auto 40px" }}>
          FarmBridge portal is a one-stop solution for organic farmers to sell
          their produce and promote organic farming. This portal caters to
          various stakeholders like individual farmers and buyers.
        </p>

        <div style={cardContainer}>
          {[
            { img: farmer, count: "23,412", label: "Registered Farmers" },
            { img: buyer, count: "2,345", label: "Buyers" },
          ].map((item, index) => (
            <div key={index} style={featureCard}>
              <img src={item.img} width={40} alt={item.label} />
              <h5 style={{ fontSize: "1.5rem", color: "#2E7D32", marginBottom: "10px" }}>
                {item.count}
              </h5>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div style={{ ...sectionStyle, backgroundColor: "#f8f9fa" }}>
        <h3 style={{ fontSize: "2rem", color: "#333", marginBottom: "40px", fontWeight: "bold" }}>
          Our Features
        </h3>
        <div style={cardContainer}>
          {[
            { img: buy, title: "Fixed Price Selling", desc: "Buyers can order organic products online at a fixed price set by the seller." },
            { img: enquiry, title: "Enquiry-Based Buying", desc: "Buyers can place an enquiry, and sellers can submit their quotes." },
            { img: product, title: "Future Demand Requests", desc: "Buyers can request products that farmers will produce in the future." },
          ].map((feature, index) => (
            <div key={index} style={featureCard}>
              <img src={feature.img} width={60} alt={feature.title} />
              <h4 style={{ fontSize: "1.2rem", color: "#333", marginBottom: "10px" }}>
                {feature.title}
              </h4>
              <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      <div style={newsSectionStyle}>
        <h3 style={{ fontSize: "2rem", color: "#333", marginBottom: "40px", fontWeight: "bold" }}>
          📰 Recent News in Farming
        </h3>
        <div style={newsGridStyle}>
          {news.length > 0 ? (
            news.map((article, index) => (
              <div
                key={index}
                style={newsCardStyle}
                onClick={() => window.open(article.url, "_blank")}
              >
                <img
                  src={article.urlToImage || "https://via.placeholder.com/280x150"}
                  alt={article.title}
                  style={{ width: "100%", height: "150px", objectFit: "cover" }}
                />
                <div style={{ padding: "15px" }}>
                  <h4 style={{ fontSize: "1.1rem", color: "#333", marginBottom: "10px" }}>
                    {article.title}
                  </h4>
                  <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: "1.5" }}>
                    {article.description ? article.description.slice(0, 100) + "..." : "No description available"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", color: "#666" }}>Loading news...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MidSection;
