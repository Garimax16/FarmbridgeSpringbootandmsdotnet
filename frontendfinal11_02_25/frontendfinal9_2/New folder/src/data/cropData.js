import React from "react";
import '../styles/CropList.css';
import Sidebar from "./Sidebar";
import Header from "./Header"; // Importing Header component
import "../styles/Sidebar.css";
import "../styles/Header.css";

const cropData = [
  { name: "Mustard", seller: "GARIMA KHASDEO", location: "ANDHRA PRADESH", quantity: "4 Quintals", contact: "1234567890" },
  { name: "PEAS (FIELD PEAS/ GARDEN PEAS/MATAR)", seller: "KARTIKAY DHAKAD", location: "MADHYA PRADESH", quantity: "5 Quintals", contact: "1234567890" },
  { name: "PEAS (FIELD PEAS/ GARDEN PEAS/MATAR)", seller: "TANYA SINGH", location: "MAHARASHTRA", quantity: "2 Quintals", contact: "1234567890" },
  { name: "PEAS (FIELD PEAS/ GARDEN PEAS/MATAR)", seller: "RAHUL BARASKAR", location: "MAHARASHTRA", quantity: "0.9 Quintals", contact: "1234567890" },
];

function CropList() {
  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="crop-list">
          <p className="disclaimer">Disclaimer: Please contact the seller for purchasing the crops</p>
          <div className="crops">
            {cropData.map((crop, index) => (
              <div key={index} className="crop-item">
                <h3>{crop.name}</h3>
                <p>{crop.seller}</p>
                <p>{crop.location}</p>
                <div className="crop-details">
                  <span>{crop.quantity}</span>
                  <span>{crop.contact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CropList;
