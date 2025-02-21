import { Link } from 'react-router-dom'; 
import { Navbar, Nav, NavDropdown, Container,Dropdown } from 'react-bootstrap';
import { useState,React, useEffect } from 'react';

import CropList from "../components/CropList.js";
import Sidebar from "../components/Sidebar.js";
import Header from "../components/Header.js";


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
import BuyerService from '../Api/BuyerService.js';
import "../styles/Header.css";
function NavibarB() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [user,setUser] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
  
    useEffect(() => {
      const fetchUser = async () => {
          try {
              const response = await BuyerService.getBuyerById();
       
              setUser(response.data);
              
          } catch (err) {
              console.log(err)
          }
      };

      fetchUser();
  }, []);



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
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Navbar expand="lg" className="nav" onToggle={() => setIsCollapsed(!isCollapsed)} 
    expanded={isCollapsed}>
      <Container>
      <Nav.Link as={Link} to="/">
        <Navbar.Brand className="nav-links" >FarmBridge</Navbar.Brand>
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={` ${isCollapsed ?'collapsed-bg':'' }`} >
          <Nav className="me-auto nav-links">
          <Nav.Link as={Link} to="/admin-login" className="nav-links">Admin Login</Nav.Link>
             {/* Link to About Us page */}
           
            <NavDropdown title="Buyer" id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/buyer-login" className='nav-links'>Buyer Login</NavDropdown.Item>  {/* Link to Buyer Login page */}
              <NavDropdown.Item as={Link} to="/buyer-register" className='nav-links'>Buyer Registration</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Farmer" id="basic-nav-dropdown" >
              <NavDropdown.Item as={Link} to="/seller-login" className="nav-links">Farmer Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/seller-register" className="nav-links">Farmer Registration</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link as={Link} to="/contact-us" className="nav-links">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className='nav-links'>About Us</Nav.Link>
          </Nav>
          <Navbar.Text>
          <div className="controls">
          <IconButton color="inherit" onClick={() => navigate("/cart")}>
            <ShoppingCartOutlinedIcon />
          </IconButton>
          <Button
            color="inherit"
            onClick={handleMenuClick}
            startIcon={<AccountCircleIcon />}
            // className="user-menu"
          >
        Hi, {user ? user.fullName : "Guest"}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
         
            <MenuItem onClick={() => navigateTo("/myOrders")}>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>My Orders</ListItemText>
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
              <ListItemText as={Link} to='/'>Logout</ListItemText>
            </MenuItem>
          </Menu>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu">
          <IconButton color="inherit" onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
        </div>
      
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavibarB;


// 

// import React, { useState, useEffect } from "react";
// import {
//   Navbar,
//   Nav,
//   NavDropdown,
//   Container,
//   Button,
// } from "react-bootstrap";
// import { useNavigate, Link } from "react-router-dom";
// import IconButton from "@mui/material/IconButton"; // Correct import
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import LogoutIcon from "@mui/icons-material/Logout";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// function NavibarB() {
//   const [username, setUsername] = useState("User");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token); // Ensure jwtDecode is correctly imported
//         console.log("Decoded Token:", decodedToken);
//         setUsername(decodedToken.name || "User"); // Use the appropriate field for the username
//       } catch (error) {
//         console.error("Error decoding token:", error);
//       }
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     navigate("/"); // Redirect to the login page
//   };

//   return (
//     <Navbar expand="lg" className="nav">
//       <Container>
//         <Nav.Link as={Link} to="/">
//           <Navbar.Brand className="nav-links">FarmBridge</Navbar.Brand>
//         </Nav.Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto nav-links">
//             <Nav.Link as={Link} to="/admin-login" className="nav-links">Admin Login</Nav.Link>
//             <NavDropdown title="Buyer" id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to="/buyer-login" className="nav-links">Buyer Login</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/buyer-register" className="nav-links">Buyer Registration</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Farmer" id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to="/seller-login" className="nav-links">Farmer Login</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/seller-register" className="nav-links">Farmer Registration</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={Link} to="/contact-us" className="nav-links">Contact Us</Nav.Link>
//             <Nav.Link as={Link} to="/about-us" className="nav-links">About Us</Nav.Link>
//           </Nav>
//           <Navbar.Text>
//             <div className="controls">
//               <IconButton color="inherit" onClick={() => navigate("/cart")}>
//                 <ShoppingCartOutlinedIcon />
//               </IconButton>
//               <Button
//                 color="inherit"
//                 startIcon={<AccountCircleIcon />}
//                 className="user-menu"
//               >
//                 Hi, {username}
//               </Button>
//               <Button variant="danger" onClick={handleLogout}>
//                 Logout
//               </Button>
//             </div>
//           </Navbar.Text>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavibarB;


