
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessageProvider } from "./context/MessageContext"; // Import your provider
import AdminPage from "./pages/AdminPage";
import BuyerFront from "./pages/BuyerFront";
import Cart from "./pages/Cart";
import WalletStatement from "./pages/WalletStatement";
import MyOrders from "./pages/MyOrders";
import BuyerADDress from "./pages/BuyerADDress";
import BuyerProfile from "./pages/BuyerProfile";
import ProductApprovalPage from "./pages/ProductApprovalPage";
import Home from "./pages/Home";
import SellerHome from "./pages/SellerHome";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ProfileEditPage from "./pages/ProfileEditPage";
import BLogin from "./components/BLogin";
import Register from "./components/Register";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { OrdersMgmt } from "./pages/OrdersMgmt";
import AdminSupportPage from "./pages/AdminSupportPage.jsx";
import BuyerEdit from "./pages/BuyerEdit.js";
import ForgotPassword from "./components/ForgotPassword.jsx";
import Order from './components/Order.js';
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the required CSS

function App() {
  return (
    <MessageProvider>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/Adminpage" element={<AdminPage />} />
          <Route path="/edit-profile" element={<BuyerEdit />} />
          <Route path="/Admin-m" element={<AdminDashboard />} />
          <Route path="/order" element={<OrdersMgmt />} />
          <Route path="/seller-login" element={<Login />} />
          <Route path="/Fregister" element={<Registration />} />
          <Route path="/seller-home" element={<SellerHome />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/seller-profile" element={<ProfileEditPage />} />
          <Route path="/buyer-login" element={<BLogin/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/buyer-register" element={<Register />} />
          <Route path="/product-approval" element={<ProductApprovalPage />} />
          <Route path="/" element={<Home />} />

          <Route path="/buyerfront" element={<BuyerFront />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/:orderId" element={<Order/>} />
          <Route path="/wallet-statement" element={<WalletStatement />} />
          <Route path="/myOrders" element={<MyOrders />} />
          <Route path="/buyerAddress" element={<BuyerADDress />} />
          <Route path="/buyerprofile" element={<BuyerProfile />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/AdminSupportPage" element={<AdminSupportPage />} />
          <Route path="/seller-register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </MessageProvider>
  );
}

export default App;
