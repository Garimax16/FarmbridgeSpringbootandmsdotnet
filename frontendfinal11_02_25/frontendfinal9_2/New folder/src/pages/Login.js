import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import {Footer} from '../components/Footer';
import Navibar from '../components/Navibar';


const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      backgroundColor: '#ffffff'
    },
    title: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: '30px',
      fontSize: '24px'
    },
    formGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#555555',
      fontSize: '16px'
    },
    input: {
      width: '100%',
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #dddddd',
      fontSize: '16px',
      boxSizing: 'border-box'
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#11a3a1',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '10px',
      marginBottom: '20px'
    },
    error: {
      color: '#ff0000',
      fontSize: '14px',
      marginTop: '5px'
    },
    registerLink: {
      textAlign: 'center',
      color: '#666666'
    },
    link: {
      color: '#11a3a1',
      textDecoration: 'none'
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required.';
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits.';
    }
    if (!password) {
      newErrors.password = 'Password is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (validateForm()) {
        try {
            const response = await axios.post('http://localhost:8082/auth/login', {
                contact: mobileNumber,
                password
            });

            localStorage.setItem('authToken', response.data);  // Store JWT token
            navigate('/seller-home');  // Redirect after login

        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            setErrors({ form: 'Invalid credentials. Please try again.' });
        }
    }
};


  return (
    <div>
      <Navibar/>
   
    <div style={styles.container}>
      <h1 style={styles.title}>Farmer Login</h1>
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="mobileNumber">Mobile Number</label>
        <input
          style={styles.input}
          type="text"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter your mobile number"
        />
        {errors.mobileNumber && <p style={styles.error}>{errors.mobileNumber}</p>}
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="password">Password</label>
        <input
          style={styles.input}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        {errors.password && <p style={styles.error}>{errors.password}</p>}
      </div>
      <button style={styles.button} onClick={handleLogin}>
        Login
      </button>
      {errors.form && <p style={styles.error}>{errors.form}</p>}
      <p style={styles.registerLink}>
        Don't have an account? <Link style={styles.link} to="/Fregister">Register here</Link>
      </p>
    </div>
    <Footer/>
    </div>
  );
};

export default Login;