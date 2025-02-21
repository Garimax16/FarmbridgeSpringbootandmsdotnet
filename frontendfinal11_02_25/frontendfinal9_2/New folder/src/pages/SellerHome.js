import NavibarS from "../components/NavibarS";
import { SellerMyCrops } from "../components/SellerMyCrops";
import { SellerOrders } from "../components/SellerOrders";
import { SellerDashBoard } from "../components/SellerDashBoard";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import {Footer} from '../components/Footer';
import { X } from "@mui/icons-material";

function SellerHome() {
  const [activeTab, setActiveTab] = useState("crops");

  return (
    <div style={container}>
      <NavibarS />
      <SellerDashBoard />
      <Nav
        variant="pills"
        className="sellerdashnav"
        // activeKey={activeTab}
        onSelect={(selectedKey) => setActiveTab(selectedKey)}
      >
        <Nav.Item>
          <Nav.Link eventKey="crops" className="SDashNav">My Crops</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="orders" className="SDashNav">My Orders</Nav.Link>
        </Nav.Item>
      </Nav>
      <hr className="Sdash" />
      
      {activeTab === "crops" && <SellerMyCrops />}
      {activeTab === "orders" && <SellerOrders />}
      <Footer/>
    </div>
  );
}


const container={
  margin:"0",
  padding:'0',
  width:"100vw",
  overflowX:"hidden"
}

export default SellerHome;
