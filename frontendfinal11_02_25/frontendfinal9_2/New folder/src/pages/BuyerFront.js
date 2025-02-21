import React from "react";
import CropList from "../components/CropList.js";
import Sidebar from "../components/Sidebar.js";
//import Header from "../components/Header.js";
import NavibarB from "../components/NaviBarB.js";
import ProtectedRoute from '../components/ProtectedRoute.js';

function BuyerFront() {
  return React.createElement(
    "div",
    {
      className: "home",
      style: {
        margin: "0",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      },
    },
    React.createElement(NavibarB, {
      style: {
        margin: "0",
        padding: "0",
        position: "sticky",
        top: "0",
        zIndex: "10",
        backgroundColor: "#f8f9fa",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      },
    }),
    React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flex: "1",
          height: "100%",
          overflow: "hidden",
        },
      },
      React.createElement(Sidebar, {
        style: {
          flex: "0 0 250px", // Fixed width for Sidebar
          height: "100%",
          backgroundColor: "#343a40",
          color: "#fff",
          padding: "15px",
          overflowY: "auto",
        },
      }),
      React.createElement("div", {
        style: {
          flex: "1", // Sidebar takes fixed width; CropList occupies remaining space
          overflowY: "auto",
          padding: "20px",
          backgroundColor: "#f5f5f5",
        },
      }, 
      
      React.createElement(ProtectedRoute, null, React.createElement(CropList, null)))
    )
  );
}

export default BuyerFront;