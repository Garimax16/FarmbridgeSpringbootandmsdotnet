import React, { useState } from "react";
import Header from "../components/Header";
import {
  
  Typography,
  Button,
 
  Box,
  Card,
  CardContent,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const WalletStatement = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAddMoneySection, setShowAddMoneySection] = useState(false);
  const [amount, setAmount] = useState("");
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddMoneyClick = () => {
    setShowAddMoneySection(!showAddMoneySection);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleProceedToPayment = () => {
    alert(`Proceeding to add ₹${amount} to your wallet.`);
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
        width: "1700px",
      },
    },
    React.createElement(Header, {
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
      { style: { padding: "20px", maxWidth: "1200px", margin: "auto" } },
      React.createElement(
        Card,
        null,
        React.createElement(
          CardContent,
          null,
          React.createElement(
            Typography,
            { variant: "h5", gutterBottom: true },
            "Your current balance"
          ),
          React.createElement(
            Typography,
            {
              variant: "h3",
              sx: { marginBottom: "20px", color: "#9e9763" },
            },
            "₹ 0"
          ),
          React.createElement(Button, {
            variant: "contained",
            sx: {
              backgroundColor: "#9e9763",
              "&:hover": { backgroundColor: "#827a50" },
            },
            onClick: handleAddMoneyClick,
            children: "+ Add Money",
          })
        )
      ),
      showAddMoneySection &&
        React.createElement(
          Box,
          { mt: 2 },
          React.createElement(
            Card,
            null,
            React.createElement(
              CardContent,
              null,
              React.createElement(
                Box,
                { display: "flex", alignItems: "center" },
                React.createElement(TextField, {
                  label: "Enter amount to be added",
                  variant: "outlined",
                  size: "small",
                  value: amount,
                  onChange: handleAmountChange,
                  sx: { flex: 1, marginRight: "20px" },
                }),
                React.createElement(Button, {
                  variant: "contained",
                  sx: {
                    backgroundColor: "#9e9763",
                    "&:hover": { backgroundColor: "#827a50" },
                  },
                  onClick: handleProceedToPayment,
                  children: "Proceed to Payment",
                })
              )
            )
          )
        ),
      React.createElement(
        Box,
        { mt: 4 },
        React.createElement(
          Card,
          null,
          React.createElement(
            CardContent,
            null,
            React.createElement(
              Typography,
              { variant: "h6", gutterBottom: true },
              "Your wallet statement"
            ),
            React.createElement(
              Table,
              null,
              React.createElement(
                TableHead,
                null,
                React.createElement(
                  TableRow,
                  null,
                  React.createElement(TableCell, null, "Date"),
                  React.createElement(TableCell, null, "Amount"),
                  React.createElement(TableCell, null, "Closing Balance")
                )
              ),
              React.createElement(TableBody, null)
            )
          )
        )
      )
    )
  );
};

export default WalletStatement;
