import React from "react";
import { useNavigate } from "react-router-dom";
import {Footer} from '../components/Footer';
import NavibarA from '../components/NavibarA';
import NavibarAdminHome from "../components/NavibarAdminHome";

const AdminPage = () => {
  const navigate = useNavigate();
  const adminName = "Hello, Garima Khasdeo";

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
    <NavibarAdminHome/>


      <div style={mainContentStyle}>
        <div style={buttonContainerStyle}>
          <button
            style={{ ...buttonStyle, backgroundColor: "#11a3a1" }}
            onClick={() => navigate("/product-approval")}
          >
            Product Approval
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: "#9e9763" }}
            onClick={() => navigate("/AdminSupportPage")}
          >
            Customer Support
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: "#9e9763", color: "white" }}
            onClick={() => navigate("/admin-m")}
          >
            Profile Management
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: "#11a3a1", color: "white" }}
            onClick={() => navigate("/order")}
          >
            Orders Management
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const headerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "2e7d32",
  height: "60px",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
  
};

const headerTitleStyle = {
  color: "white",
  textAlign: "center",
  flex: 1,
  fontSize: "20px",
  marginLeft: "15%",
};

const adminNameStyle = {
  color: "white",
  fontSize: "18px",
  margin: "0",
};

const mainContentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh - 60px)",
  marginTop: "60px",
  flexDirection: "column",
  padding: "20px",
};

const buttonContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "space-around", 
  textAlign: "center",
  padding: "30px", 
  borderRadius: "15px",
  backgroundColor: "#76504b",
  maxWidth: "600px", 
  width: "100%",
};

const buttonStyle = {
  flex: "1 1 48%",
  padding: "20px",
  border: "none",
  borderRadius: "8px",
  fontSize: "18px", 
  cursor: "pointer",
  textAlign: "center",
  minWidth: "150px", 
};

const responsiveStyles = `
  @media (max-width: 768px) {
    .button-container {
      flex-direction: column;
    }
    .button {
      flex: 1 1 100%;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = responsiveStyles;
document.head.appendChild(styleSheet);

export default AdminPage;