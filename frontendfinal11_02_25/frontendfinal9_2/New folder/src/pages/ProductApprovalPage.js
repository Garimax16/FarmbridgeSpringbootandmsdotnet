import React, { useState } from "react";
import {Footer} from '../components/Footer';
import NavibarA from '../components/NavibarA';


const adminName = "Hello, Garima Khasdeo";

const ProductApprovalPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", status: "pending" },
    { id: 2, name: "Product 2", status: "pending" },
    { id: 3, name: "Product 3", status: "pending" },
  ]);

  const approveProduct = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, status: "approved" } : product
      )
    );
  };

  const denyProduct = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, status: "denied" } : product
      )
    );
  };

  return (
    <div>
      <NavibarA/>
    <div style={containerStyle}>
      {/* <header style={headerStyle}>
        <h2 style={headerTitleStyle}>Welcome to the Admin Panel</h2>
        <p style={adminNameStyle}>{adminName}</p>
      </header> */}
      
      <h2 style={titleStyle}>Product Approval</h2>
      <div style={tableWrapperStyle}>
        <table style={tableStyle}>
          <thead>
            <tr style={headerRowStyle}>
              <th style={headerCellStyle}>Product Name</th>
              <th style={headerCellStyle}>Status</th>
              <th style={headerCellStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product.id}
                style={index % 2 === 0 ? rowStyleEven : rowStyleOdd}
              >
                <td style={cellStyle}>{product.name}</td>
                <td style={cellStyle}>{product.status}</td>
                <td style={cellStyle}>
                  {product.status === "pending" && (
                    <>
                      <button
                        style={approveButtonStyle}
                        onClick={() => approveProduct(product.id)}
                      >
                        Approve
                      </button>
                      <button
                        style={denyButtonStyle}
                        onClick={() => denyProduct(product.id)}
                      >
                        Deny
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: "20px",
  margin: "0 auto",
  maxWidth: "1200px",
};

const headerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "#2e7d32",
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
  margin: "0",
};

const adminNameStyle = {
  color: "white",
  fontSize: "18px",
  margin: "0",
};

const titleStyle = {
  textAlign: "center",
  color: "#2e7d32",
  marginTop: "100px",
};

const tableWrapperStyle = {
  overflowX: "auto", // Ensures horizontal scroll for smaller screens
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "20px 0",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

const headerRowStyle = {
  backgroundColor: "#76504b",
  color: "black",
  marginLeft:'1rem'
};

const headerCellStyle = {
  padding: "12px",
  textAlign: "left",
  border: "1px solid #ddd",
  fontWeight: "bold",
};

const rowStyleEven = {
  backgroundColor: "#f9f9f9",
};

const rowStyleOdd = {
  backgroundColor: "#ffffff",
};

const cellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
};

const approveButtonStyle = {
  padding: "8px 16px",
  marginRight: "10px",
  backgroundColor: "#2ecc71",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const denyButtonStyle = {
  padding: "8px 16px",
  backgroundColor: "#e74c3c",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default ProductApprovalPage;
