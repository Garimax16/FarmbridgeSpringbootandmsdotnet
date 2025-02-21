
// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom';

// export function Adminlogin() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({ email: '', password: '' });
//   const navigate = useNavigate(); // Hook for navigation

//   // Email validation function
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
//     return emailRegex.test(email);
//   };

//   const validateForm = () => {
//     let emailError = '';
//     let passwordError = '';
//     let valid = true;

//     // Email validation
//     if (!email) {
//       emailError = 'Email is required';
//       valid = false;
//     } else if (!validateEmail(email)) {
//       emailError = 'Invalid email format';
//       valid = false;
//     }

//     // Password validation
//     if (!password) {
//       passwordError = 'Password is required';
//       valid = false;
//     } else if (password.length < 6) {
//       passwordError = 'Password must be at least 6 characters long';
//       valid = false;
//     }

//     setErrors({ email: emailError, password: passwordError });
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       // Store data in localStorage
//       localStorage.setItem('adminEmail', email);
//       localStorage.setItem('adminPassword', password);

//       // Redirect to Admin page
//       navigate('/Adminpage');
//     }
//   };

//   return (
//     <div className='adminlogin'>
//       <h4 className='aloginheading'>Admin Login</h4>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             isInvalid={!!errors.email}
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.email}
//           </Form.Control.Feedback>
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             isInvalid={!!errors.password}
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.password}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// }


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {Footer} from '../components/Footer';

export function Adminlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Hardcoded credentials (you can change these as needed)
  const adminEmail = 'admin@gmail.com';
  const adminPassword = 'admin123'; // Example password

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let emailError = '';
    let passwordError = '';
    let valid = true;

    // Email validation
    if (!email) {
      emailError = 'Email is required';
      valid = false;
    } else if (!validateEmail(email)) {
      emailError = 'Invalid email format';
      valid = false;
    }

    // Password validation
    if (!password) {
      passwordError = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      passwordError = 'Password must be at least 6 characters long';
      valid = false;
    }

    setErrors({ email: emailError, password: passwordError });
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      // Simulating login: check if the entered credentials match the hardcoded ones
      if (email === adminEmail && password === adminPassword) {
        // Store a flag in localStorage to indicate that the user is logged in
        localStorage.setItem('isAdminLoggedIn', 'true');

        // Redirect to the Admin page
        navigate('/Adminpage');
      } else {
        setErrorMessage('Invalid email or password');
      }

      setLoading(false);
    }
  };

  return (
    <div className='adminlogin'>
      <h4 className='aloginheading'>Admin Login</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Submit'}
        </Button>

        {errorMessage && (
          <div className="text-danger mt-3">
            <p>{errorMessage}</p>
          </div>
        )}
      </Form>
      <Footer />
    </div>
  );
}
