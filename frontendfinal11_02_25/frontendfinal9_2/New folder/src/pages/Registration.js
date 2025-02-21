// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {Footer} from '../components/Footer';
// import Navibar from '../components/Navibar';


// const Registration = () => {
//   const [fullName, setFullName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [aadhaarNumber, setAadhaarNumber] = useState('');
//   const [errors, setErrors] = useState({});

//   const styles = {
//     container: {
//       maxWidth: '400px',
//       margin: '20px auto',
//       padding: '20px',
//       boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//       borderRadius: '8px',
//       backgroundColor: '#ffffff',
//       minHeight: 'auto'
//     },
//     title: {
//       textAlign: 'center',
//       color: '#333333',
//       marginBottom: '20px',
//       fontSize: '24px'
//     },
//     formGroup: {
//       marginBottom: '15px'
//     },
//     label: {
//       display: 'block',
//       marginBottom: '5px',
//       color: '#555555',
//       fontSize: '14px'
//     },
//     input: {
//       width: '100%',
//       padding: '8px',
//       borderRadius: '4px',
//       border: '1px solid #dddddd',
//       fontSize: '14px',
//       boxSizing: 'border-box'
//     },
//     button: {
//       width: '100%',
//       padding: '10px',
//       backgroundColor: '#11a3a1',
//       color: 'white',
//       border: 'none',
//       borderRadius: '4px',
//       fontSize: '16px',
//       cursor: 'pointer',
//       marginTop: '10px',
//       marginBottom: '15px'
//     },
//     error: {
//       color: '#ff0000',
//       fontSize: '12px',
//       marginTop: '3px'
//     },
//     loginLink: {
//       textAlign: 'center',
//       color: '#666666',
//       fontSize: '14px',
//       marginBottom: '0'
//     },
//     link: {
//       color: '#11a3a1',
//       textDecoration: 'none'
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!fullName) newErrors.fullName = 'Full name is required.';
//     if (!mobileNumber) {
//       newErrors.mobileNumber = 'Mobile number is required.';
//     } else if (!/^\d{10}$/.test(mobileNumber)) {
//       newErrors.mobileNumber = 'Mobile number must be 10 digits.';
//     }
//     if (email && !/^\S+@\S+\.\S+$/.test(email)) {
//       newErrors.email = 'Please enter a valid email address.';
//     }
//     if (!address) newErrors.address = 'Address is required.';
//     if (!password) newErrors.password = 'Password is required.';
//     if (!aadhaarNumber) {
//       newErrors.aadhaarNumber = 'Aadhaar number is required.';
//     } else if (!/^\d{12}$/.test(aadhaarNumber)) {
//       newErrors.aadhaarNumber = 'Aadhaar number must be 12 digits.';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleRegistration = () => {
//     if (validateForm()) {
//       console.log('Registering user:', {
//         fullName,
//         mobileNumber,
//         email,
//        address,
//         password,
//         aadhaarNumber,
//       });
//     }
//   };

//   return (

//     <div>
//       <Navibar/>
 
//     <div style={styles.container}>
//       <h1 style={styles.title}>Farmer Registration</h1>
//       <div style={styles.formGroup}>
//         <label style={styles.label} htmlFor="fullName">Full Name *</label>
//         <input
//           style={styles.input}
//           type="text"
//           id="fullName"
//           value={fullName}
//           onChange={(e) => setFullName(e.target.value)}
//           placeholder="Enter your full name"
//         />
//         {errors.fullName && <p style={styles.error}>{errors.fullName}</p>}
//       </div>
//       <div style={styles.formGroup}>
//         <label style={styles.label} htmlFor="mobileNumber">Mobile Number *</label>
//         <input
//           style={styles.input}
//           type="text"
//           id="mobileNumber"
//           value={mobileNumber}
//           onChange={(e) => setMobileNumber(e.target.value)}
//           placeholder="Enter 10-digit mobile number"
//         />
//         {errors.mobileNumber && <p style={styles.error}>{errors.mobileNumber}</p>}
//       </div>
//       <div style={styles.formGroup}>
//         <label style={styles.label} htmlFor="email">Email Address</label>
//         <input
//           style={styles.input}
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email address"
//         />
//         {errors.email && <p style={styles.error}>{errors.email}</p>}
//       </div>
//       <div style={styles.formGroup}>
//         <label style={styles.label} htmlFor="address">Address *</label>
//         <input
//           style={styles.input}
//           type="text"
//           id="address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           placeholder="Enter your Address"
//         />
//         {errors.address && <p style={styles.error}>{errors.address}</p>}
//       </div>
//       <div style={styles.formGroup}>
//         <label style={styles.label} htmlFor="password">Password *</label>
//         <input
//           style={styles.input}
//           type="text"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter your password"
//         />
//         {errors.password && <p style={styles.error}>{errors.password}</p>}
//       </div>
//       <div style={styles.formGroup}>
//         <label style={styles.label} htmlFor="aadhaarNumber">Aadhaar Number *</label>
//         <input
//           style={styles.input}
//           type="text"
//           id="aadhaarNumber"
//           value={aadhaarNumber}
//           onChange={(e) => setAadhaarNumber(e.target.value)}
//           placeholder="Enter 12-digit Aadhaar number"
//         />
//         {errors.aadhaarNumber && <p style={styles.error}>{errors.aadhaarNumber}</p>}
//       </div>
//       <button style={styles.button} onClick={handleRegistration}>
//         Register
//       </button>
//       <p style={styles.loginLink}>
//         Already have an account? <Link style={styles.link} to="/seller-login">Login here</Link>
//       </p>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default Registration;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Footer } from '../components/Footer';
// import Navibar from '../components/Navibar';

// const Registration = () => {
//   const [fullName, setFullName] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [aadhaarNumber, setAadhaarNumber] = useState('');
//   const [errors, setErrors] = useState({});

//   const styles = {
//     container: {
//       maxWidth: '400px',
//       margin: '20px auto',
//       padding: '20px',
//       boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//       borderRadius: '8px',
//       backgroundColor: '#ffffff',
//       minHeight: 'auto',
//     },
//     title: {
//       textAlign: 'center',
//       color: '#333333',
//       marginBottom: '20px',
//       fontSize: '24px',
//     },
//     formGroup: {
//       marginBottom: '15px',
//     },
//     label: {
//       display: 'block',
//       marginBottom: '5px',
//       color: '#555555',
//       fontSize: '14px',
//     },
//     input: {
//       width: '100%',
//       padding: '8px',
//       borderRadius: '4px',
//       border: '1px solid #dddddd',
//       fontSize: '14px',
//       boxSizing: 'border-box',
//     },
//     button: {
//       width: '100%',
//       padding: '10px',
//       backgroundColor: '#11a3a1',
//       color: 'white',
//       border: 'none',
//       borderRadius: '4px',
//       fontSize: '16px',
//       cursor: 'pointer',
//       marginTop: '10px',
//       marginBottom: '15px',
//     },
//     error: {
//       color: '#ff0000',
//       fontSize: '12px',
//       marginTop: '3px',
//     },
//     loginLink: {
//       textAlign: 'center',
//       color: '#666666',
//       fontSize: '14px',
//       marginBottom: '0',
//     },
//     link: {
//       color: '#11a3a1',
//       textDecoration: 'none',
//     },
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!fullName) newErrors.fullName = 'Full name is required.';
//     if (!mobileNumber) {
//       newErrors.mobileNumber = 'Mobile number is required.';
//     } else if (!/^\d{10}$/.test(mobileNumber)) {
//       newErrors.mobileNumber = 'Mobile number must be 10 digits.';
//     }
//     if (email && !/^\S+@\S+\.\S+$/.test(email)) {
//       newErrors.email = 'Please enter a valid email address.';
//     }
//     if (!address) newErrors.address = 'Address is required.';
//     if (!password) newErrors.password = 'Password is required.';
//     if (!aadhaarNumber) {
//       newErrors.aadhaarNumber = 'Aadhaar number is required.';
//     } else if (!/^\d{12}$/.test(aadhaarNumber)) {
//       newErrors.aadhaarNumber = 'Aadhaar number must be 12 digits.';
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleRegistration = async () => {
//     if (validateForm()) {
//       try {
//         const response = await axios.post('http://localhost:8080/farmers/add', {
//           fullName,              
//           address,               
//           contact: mobileNumber, 
//           adharcard: aadhaarNumber,
//           email,                 
//           password,              
//         });
//         console.log('Registration successful:', response.data);
//         alert('Registration successful!');
//         // Redirect to another page if needed
//       } catch (error) {
//         console.error('Registration failed:', error.response?.data || error.message);
//         alert('Registration failed: ' + (error.response?.data?.message || error.message));
//       }
//     }
//   };
  

//   return (
//     <div>
//       <Navibar />
//       <div style={styles.container}>
//         <h1 style={styles.title}>Farmer Registration</h1>
//         <div style={styles.formGroup}>
//           <label style={styles.label} htmlFor="fullName">Full Name *</label>
//           <input
//             style={styles.input}
//             type="text"
//             id="fullName"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             placeholder="Enter your full name"
//           />
//           {errors.fullName && <p style={styles.error}>{errors.fullName}</p>}
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label} htmlFor="mobileNumber">Mobile Number *</label>
//           <input
//             style={styles.input}
//             type="text"
//             id="mobileNumber"
//             value={mobileNumber}
//             onChange={(e) => setMobileNumber(e.target.value)}
//             placeholder="Enter 10-digit mobile number"
//           />
//           {errors.mobileNumber && <p style={styles.error}>{errors.mobileNumber}</p>}
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label} htmlFor="email">Email Address</label>
//           <input
//             style={styles.input}
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email address"
//           />
//           {errors.email && <p style={styles.error}>{errors.email}</p>}
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label} htmlFor="address">Address *</label>
//           <input
//             style={styles.input}
//             type="text"
//             id="address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             placeholder="Enter your Address"
//           />
//           {errors.address && <p style={styles.error}>{errors.address}</p>}
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label} htmlFor="password">Password *</label>
//           <input
//             style={styles.input}
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           />
//           {errors.password && <p style={styles.error}>{errors.password}</p>}
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label} htmlFor="aadhaarNumber">Aadhaar Number *</label>
//           <input
//             style={styles.input}
//             type="text"
//             id="aadhaarNumber"
//             value={aadhaarNumber}
//             onChange={(e) => setAadhaarNumber(e.target.value)}
//             placeholder="Enter 12-digit Aadhaar number"
//           />
//           {errors.aadhaarNumber && <p style={styles.error}>{errors.aadhaarNumber}</p>}
//         </div>
//         <button style={styles.button} onClick={handleRegistration}>
//           Register
//         </button>
//         <p style={styles.loginLink}>
//           Already have an account? <Link style={styles.link} to="/seller-login">Login here</Link>
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Registration;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Footer } from '../components/Footer';
import Navibar from '../components/Navibar';

const Registration = () => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [errors, setErrors] = useState({});

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      minHeight: 'auto',
    },
    title: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: '20px',
      fontSize: '24px',
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#555555',
      fontSize: '14px',
    },
    input: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #dddddd',
      fontSize: '14px',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#11a3a1',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      cursor: 'pointer',
      marginTop: '10px',
      marginBottom: '15px',
    },
    error: {
      color: '#ff0000',
      fontSize: '12px',
      marginTop: '3px',
    },
    loginLink: {
      textAlign: 'center',
      color: '#666666',
      fontSize: '14px',
      marginBottom: '0',
    },
    link: {
      color: '#11a3a1',
      textDecoration: 'none',
    },
  };

  const validateForm = () => {
    const newErrors = {};
    if (!fullName) newErrors.fullName = 'Full name is required.';
    if (!mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required.';
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number must be 10 digits.';
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!address) newErrors.address = 'Address is required.';
    if (!password) newErrors.password = 'Password is required.';
    if (!aadhaarNumber) {
      newErrors.aadhaarNumber = 'Aadhaar number is required.';
    } else if (!/^\d{12}$/.test(aadhaarNumber)) {
      newErrors.aadhaarNumber = 'Aadhaar number must be 12 digits.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegistration = async () => {
    if (validateForm()) {
      try {
        // Get the token (assuming it's stored in localStorage)
        const token = localStorage.getItem('authToken'); // Make sure to store the token after login

        // Axios POST request with token-based authentication
        const response = await axios.post('http://localhost:8082/farmers/add', {
          fullName,
          address,
          contact: mobileNumber,
          adharcard: aadhaarNumber,
          email,
          password,
        });

        // If registration is successful, display a success message
        console.log('Registration successful:', response.data);
        alert('Registration successful!');

        // Redirect to login page or another page (optional)
        window.location.href = '/Seller-login'; // Use this if you want to redirect after registration

      } catch (error) {
        // Handle error (like CORS, authentication issues, etc.)
        console.error('Registration failed:', error.response?.data || error.message);
        alert('Registration failed: ' + (error.response?.data?.message || error.message));
      }
    }
  };

  return (
    <div>
      <Navibar />
      <div style={styles.container}>
        <h1 style={styles.title}>Farmer Registration</h1>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="fullName">Full Name *</label>
          <input
            style={styles.input}
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
          />
          {errors.fullName && <p style={styles.error}>{errors.fullName}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="mobileNumber">Mobile Number *</label>
          <input
            style={styles.input}
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Enter 10-digit mobile number"
          />
          {errors.mobileNumber && <p style={styles.error}>{errors.mobileNumber}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email Address</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="address">Address *</label>
          <input
            style={styles.input}
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your Address"
          />
          {errors.address && <p style={styles.error}>{errors.address}</p>}
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="password">Password *</label>
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
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="aadhaarNumber">Aadhaar Number *</label>
          <input
            style={styles.input}
            type="text"
            id="aadhaarNumber"
            value={aadhaarNumber}
            onChange={(e) => setAadhaarNumber(e.target.value)}
            placeholder="Enter 12-digit Aadhaar number"
          />
          {errors.aadhaarNumber && <p style={styles.error}>{errors.aadhaarNumber}</p>}
        </div>
        <button style={styles.button} onClick={handleRegistration}>
          Register
        </button>
        <p style={styles.loginLink}>
          Already have an account? <Link style={styles.link} to="/seller-login">Login here</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
