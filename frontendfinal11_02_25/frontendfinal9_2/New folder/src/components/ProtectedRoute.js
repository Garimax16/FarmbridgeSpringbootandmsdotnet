import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      // Redirect to login page
      navigate('/buyer-login');
    }
  }, [token, navigate]);

  if (!token) {
    // You can also return a loading state or a blank element while the navigation happens
    return null; 
  }

  return children; // Render protected component if token is available
};

export  default ProtectedRoute;