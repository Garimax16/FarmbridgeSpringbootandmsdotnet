// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
// import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
// import "react-toastify/dist/ReactToastify.css"; // Import the styles for react-toastify
// import "../styles/Login.css"; // Ensure this contains updated styles
// import Navibar from './Navibar';
// import "../styles/AboutUs.css";



// const BLogin = () => {
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate(); // Initialize useNavigate for navigation

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate form data
//     if (!loginData.email || !loginData.password) {
//       toast.error("Please fill in all fields.");
//     } else {
//       // Show success toast and navigate to /BuyerFront
//       toast.success("Login Successful!");
//       setTimeout(() => navigate("/BuyerFront"), 2000); // Navigate after showing success toast
//     }
//   };

//   return (
//     <div>
// <Navibar/>

    
//     <div className="login">
//       <h2>Welcome Back!</h2>
//       <p className="text-gray-600">Please sign in to your account</p>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={loginData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={loginData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" id="loginbtn">Login<Link to="/BuyerFront"></Link></button>
//       </form>

//       <p>
//         Don't have an account? <Link to="/buyer-register">Register here</Link>.
//       </p>
//       <p>
//         Forgot password? <Link to="/forgot-password">Click here</Link>.
//       </p>

//       {/* Toast Container */}
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
//     </div>
//     <footer className="footer">
//     <h3>Join FarmBridge</h3>
//         <p>
//           Be a part of our community and help revolutionize agriculture.
//           Together, we can make a difference.
//         </p>
//         <div className="footer-images">
//           <img
//             src="/images/logo-facebook.png"
//             alt="Facebook"
//             className="social-icon"
//           />
//           <img
//             src="/images/logo-instagram.png"
//             alt="Instagram"
//             className="social-icon"
//           />
//           <img
//             src="/images/logo-twitter.png"
//             alt="Twitter"
//             className="social-icon"
//           />
//         </div>
//         <p>© 2024 FarmBridge. All Rights Reserved.</p>
//       </footer>
    
//     </div>
//   );
// };

// export default BLogin;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";  // Import useNavigate
// import { ToastContainer, toast } from "react-toastify"; 
// import "react-toastify/dist/ReactToastify.css"; 
// import "../styles/Login.css";

// const Login = () => {
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();  // Initialize navigate

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:1406/buyers/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         const { token } = data; 
//         localStorage.setItem("authToken", token);

//         // Show success toast notification
//         toast.success("Login Successful!");

//         // Redirect to BuyerFront after a successful login
//         setTimeout(() => {
//           navigate("/BuyerFront");
//         }, 1000); // Redirect after 1 second delay

//         console.log("User Data:", data);
//       } else {
//         const errorData = await response.json();

//         // Show error toast notification
//         toast.error(errorData.message || "Invalid credentials");
//       }
//     } catch (error) {
//       // Show error toast notification
//       toast.error("Error connecting to the server!");
//     }
//   };

//   return (
//     <div className="login">
//       <h2>Welcome Back!</h2>
//       <p className="text-gray-600">Please sign in to your account</p>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={loginData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={loginData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>

//       <p>
//         Don't have an account? <Link to="/buyer-register">Register here</Link> .
//       </p>
//       <p>
//         Forgot password? <Link to="/forgot-password">Click here</Link> .
//       </p>

//       {/* Toast Container */}
//       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
//     </div>
//   );
// };

// export default Login;


// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaEnvelope, FaLock } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import * as Yup from 'yup';
// import "../styles/Login.css";
// import Navibar from './Navibar';



// // Validation schema using Yup
// const loginSchema = Yup.object().shape({
//   identifier: Yup.string()
//     .email('Invalid email format') // Ensures identifier is a valid email
//     .required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });

// const Login = () => {
//   const navigate = useNavigate();
//   // Handle form submission
//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       // Prepare login data
//       const loginData = {
//         email: values.identifier, 
//         password: values.password,
//       };

//       console.log('Submitting login data:', loginData); 

//       // Send POST request to the backend
//       const response = await fetch('http://localhost:8080/users/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Login successful:', data);
//         localStorage.setItem('token', data.token); 
//         toast.success('Login successful!');
//         navigate('/');
//       } else {
//         const errorData = await response.json(); 
//         console.error('Login failed:', errorData);
//         toast.error(errorData.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       toast.error('An error occurred while logging in');
//     } finally {
//       setSubmitting(false); // Reset submitting state
//     }
//   };

//   return (
//     <div className="login">
      
//       <h2>Welcom Back!</h2>
     
//       <Formik
//         initialValues={{
//           identifier: '', // For email
//           password: '',   // For password
//         }}
//         validationSchema={loginSchema} // Use validation schema
//         onSubmit={handleSubmit} // Form submission handler
//       >
//         {({ errors, touched, isSubmitting }) => (
//           <Form>
//             <div className="form-group">
//               <label htmlFor="identifier">Email</label>
//               <div className="input-wrapper">
//                 <FaEnvelope className="icon" />
//                 <Field
//                   name="identifier"
//                   type="text"
//                   placeholder="Enter your email"
//                   className="form-input"
//                 />
//               </div>
//               {errors.identifier && touched.identifier && (
//                 <div className="error-message">{errors.identifier}</div>
//               )}
//             </div>

//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <div className="input-wrapper">
//                 <FaLock className="icon" />
//                 <Field
//                   name="password"
//                   type="password"
//                   placeholder="Enter your password"
//                   className="form-input"
//                 />
//               </div>
//               {errors.password && touched.password && (
//                 <div className="error-message">{errors.password}</div>
//               )}
//             </div>

//             <button type="submit" className="btn" disabled={isSubmitting}>
//               {isSubmitting ? 'Signing in...' : 'Sign In'}
//             </button>

//             <div className="links">
//               <Link to="/forgot-password" className="link">
//                 Forgot Password?
//               </Link>
//               <Link to="/register" className="link">
//                 Create Account
//               </Link>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default Login;

// import React from 'react';
// import { Formik, Form, Field } from 'formik';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaEnvelope, FaLock } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import * as Yup from 'yup';
// import "../styles/Login.css";
// import Navibar from './Navibar'; // Import the Navibar component

// // Validation schema using Yup
// const loginSchema = Yup.object().shape({
//   identifier: Yup.string()
//     .email('Invalid email format') // Ensures identifier is a valid email
//     .required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
// });

// const Login = () => {
//   const navigate = useNavigate();
  
//   // Handle form submission
//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       // Prepare login data
//       const loginData = {
//         email: values.identifier, 
//         password: values.password,
//       };

//       console.log('Submitting login data:', loginData); 

//       // Send POST request to the backend
//       const response = await fetch('http://localhost:8080/users/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Login successful:', data);
//         localStorage.setItem('token', data.token); 
//         toast.success('Login successful!');
//         navigate('/BuyerFront');
//       } else {
//         const errorData = await response.json(); 
//         console.error('Login failed:', errorData);
//         toast.error(errorData.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       toast.error('An error occurred while logging in');
//     } finally {
//       setSubmitting(false); // Reset submitting state
//     }
//   };

//   return (
//     <>
//       <Navibar /> {/* Add the Navibar component here */}
//       <div className="login">
//         <h2>Welcome Back!</h2>
//         <Formik
//           initialValues={{
//             identifier: '', // For email
//             password: '',   // For password
//           }}
//           validationSchema={loginSchema} // Use validation schema
//           onSubmit={handleSubmit} // Form submission handler
//         >
//           {({ errors, touched, isSubmitting }) => (
//             <Form>
//               <div className="form-group">
//                 <label htmlFor="identifier">Email</label>
//                 <div className="input-wrapper">
//                   <FaEnvelope className="icon" />
//                   <Field
//                     name="identifier"
//                     type="text"
//                     placeholder="Enter your email"
//                     className="form-input"
//                   />
//                 </div>
//                 {errors.identifier && touched.identifier && (
//                   <div className="error-message">{errors.identifier}</div>
//                 )}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="password">Password</label>
//                 <div className="input-wrapper">
//                   <FaLock className="icon" />
//                   <Field
//                     name="password"
//                     type="password"
//                     placeholder="Enter your password"
//                     className="form-input"
//                   />
//                 </div>
//                 {errors.password && touched.password && (
//                   <div className="error-message">{errors.password}</div>
//                 )}
//               </div>

//               <button type="submit" className="btn" disabled={isSubmitting}>
//                 {isSubmitting ? 'Signing in...' : 'Sign In'}
//               </button>

//               <div className="links">
//                 <Link to="/forgot-password" className="link">
//                   Forgot Password?
//                 </Link>
//                 <Link to="/buyer-register" className="link">
//                   Create Account
//                 </Link>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </>
//   );
// };

// export default Login;



import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import "../styles/Login.css";
import Navibar from './Navibar'; // Import the Navibar component
import {Footer } from './Footer';

// Validation schema using Yup
const loginSchema = Yup.object().shape({
  identifier: Yup.string()
    .email('Invalid email format') // Ensures identifier is a valid email
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const loginData = {
        email: values.identifier,
        password: values.password,
      };
  
      console.log('Submitting login data:', loginData);
  
      const response = await fetch('http://localhost:8082/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      });
  
      const data = await response.json();
  
      // Debugging response
      console.log('Response data:', data);
  
      if (response.ok && data.jwt) { 
        localStorage.setItem('token', data.jwt); 
        console.log('Token stored successfully:', data.jwt);
        toast.success('Login successful!');
        navigate('/BuyerFront'); 
      } else {
        console.error('Login failed:', data);
        toast.error(data.mesg || 'Login failed'); // Adjusted to display `mesg`
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred while logging in');
    } finally {
      setSubmitting(false); // Reset the submitting state
    }
  };
  

  return (
    <>
      <Navibar /> {/* Add the Navibar component here */}
      <div className="login">
        <h2>Welcome Back!</h2>
        <Formik
          initialValues={{
            identifier: '', // For email
            password: '',   // For password
          }}
          validationSchema={loginSchema} // Use validation schema
          onSubmit={handleSubmit} // Form submission handler
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="identifier">Email</label>
                <div className="input-wrapper">
                  <FaEnvelope className="icon" />
                  <Field
                    name="identifier"
                    type="text"
                    placeholder="Enter your email"
                    className="form-input"
                  />
                </div>
                {errors.identifier && touched.identifier && (
                  <div className="error-message">{errors.identifier}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrapper">
                  <FaLock className="icon" />
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="form-input"
                  />
                </div>
                {errors.password && touched.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>

              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </button>

              <div className="links">
                <Link to="/forgot-password" className="link">
                  Forgot Password?
                </Link>
                <Link to="/buyer-register" className="link">
                  Create Account
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
