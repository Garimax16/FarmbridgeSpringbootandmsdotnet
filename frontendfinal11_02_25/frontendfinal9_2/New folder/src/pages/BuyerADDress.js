import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Box,
  TextField,
  Select,
  MenuItem as MuiMenuItem,
  Typography as MuiTypography,
} from "@mui/material";
import Header from "../components/Header";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoutIcon from "@mui/icons-material/Logout";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import NavibarB from "../components/NaviBarB";
import {Footer} from '../components/Footer';

const BuyerADDress = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return React.createElement(
    "div",
    {
      style: {
        margin: "0",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%", // Make the width 100% for responsiveness
      },
    },
    React.createElement(NavibarB, {
      style: {
        margin: "0",
        padding: "0",
        position: "sticky",
        top: "0",
        zIndex: "10",
      },
    }),
    React.createElement(
      "div",
      {
        style: { padding: "20px", maxWidth: "1200px", margin: "auto" },
      },
      React.createElement(
        MuiTypography,
        {
          variant: "h4",
          align: "center",
          color: "green",
          gutterBottom: true,
        },
        "Add Address"
      ),
      React.createElement(
        "form",
        {
          style: { display: "flex", flexWrap: "wrap", gap: "15px" },
        },
        React.createElement(TextField, {
          label: "Address Line",
          variant: "outlined",
          fullWidth: true,
          style: { flex: "1 1 calc(50% - 15px)" },
        }),
        React.createElement(TextField, {
          label: "City",
          variant: "outlined",
          fullWidth: true,
          style: { flex: "1 1 calc(50% - 15px)" },
        }),
        React.createElement(
          Select,
          {
            variant: "outlined",
            displayEmpty: true,
            fullWidth: true,
            style: { flex: "1 1 calc(50% - 15px)" },
          },
          React.createElement(MuiMenuItem, { value: "" }, "State"),
          React.createElement(MuiMenuItem, { value: "Maharashtra" }, "Maharashtra"),
          React.createElement(MuiMenuItem, { value: "Madhya Pradesh" }, "Madhya Pradesh"),
          React.createElement(MuiMenuItem, { value: "Gujarat" }, "Gujarat")
        ),
        React.createElement(TextField, {
          label: "District",
          variant: "outlined",
          fullWidth: true,
          style: { flex: "1 1 calc(50% - 15px)" },
        }),
        React.createElement(TextField, {
          label: "Landmark",
          variant: "outlined",
          fullWidth: true,
          style: { flex: "1 1 calc(50% - 15px)" },
        }),
        React.createElement(TextField, {
          label: "Pincode",
          variant: "outlined",
          fullWidth: true,
          style: { flex: "1 1 calc(50% - 15px)" },
        }),
        React.createElement(
          Button,
          {
            variant: "contained",
            color: "success",
            style: { flex: "1 1 100px", margin: "15px auto" },
          },
          "Submit"
        )
      ),
      React.createElement(
        MuiTypography,
        { variant: "h6", gutterBottom: true },
        "My Addresses"
      ),
      React.createElement(
        "div",
        {
          style: {
            border: "1px solid #ccc",
            padding: "15px",
            borderRadius: "4px",
          },
        },
        "No addresses added yet."
      ),
      // React.createElement(Footer ,{
      //   style: {
          
      //     width: "100%",
        
      //   },
      // }),
      <Footer/>
    )
  );
 
};

export default BuyerADDress;
