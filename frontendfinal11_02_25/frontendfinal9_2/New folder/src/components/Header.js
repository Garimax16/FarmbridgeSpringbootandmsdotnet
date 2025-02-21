import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import "../styles/Header.css";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateTo = (path) => {
    handleClose();
    navigate(path);
  };

  return (
    <header className="header">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          {/* <h2>FARMBRIDGE</h2> */}
        </div>

        {/* Desktop Menu */}
        <nav className="menu">
          <a href="/about-us">ABOUT US</a>
          <a href="/crops">CROPS</a>
          <a href="/BuyerFront">CONSUMER-ZONE</a>
          <a href="/farmer-zone">FARMER-ZONE</a>
          <a href="/grievance">GRIEVANCE</a>
          <a href="/input-suppliers">INPUT SUPPLIERS</a>
          <a href="/contact-us">CONTACT US</a>
        </nav>

        {/* User Controls */}
        <div className="controls">
          <IconButton color="inherit" onClick={() => navigate("/cart")}>
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <Button
            color="inherit"
            onClick={handleMenuClick}
            startIcon={<AccountCircleIcon />}
            className="user-menu"
          >
            Hi, Garima Khasdeo
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={() => navigateTo("/buyerAddress")}>
              <ListItemIcon>
                <AddLocationIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add Address</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => navigateTo("/myOrders")}>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>My Orders</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => navigateTo("/wallet-statement")}>
              <ListItemIcon>
                <AccountBalanceWalletIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Wallet</ListItemText>
            </MenuItem>
            <MenuItem onClick={() => navigateTo("/buyerprofile")}>
              <ListItemIcon>
                <AccountCircleIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu">
          <IconButton color="inherit" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
