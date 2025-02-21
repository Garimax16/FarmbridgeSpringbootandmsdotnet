
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { registrationSchema } from '../utils/validation'; // Assuming validation schema is set up
import { register } from '../services/api'; // Assuming this API service is implemented
import { toast } from 'react-toastify'; // For toast notifications

import "../styles/Bregister.css"; // Ensure this contains updated styles
import { Footer } from '../components/Footer';
import NavibarB from '../components/NaviBarB';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await register(values); // Make API call to register user
      toast.success('Registration successful!');
      
     
      setTimeout(() => {
        navigate('/buyer-login'); // Redirect to login after success
      }, 2000); 
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
    } finally {
      setSubmitting(false); // Stop loading indicator
    }
  };

  return (
    <>
      {/* Navbar */}
      <NavibarB />

      {/* Registration Form */}
      <div className="register">
        <h2>Create an Account</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            address: '',
            password: '',
            confirmPassword: '',
            role: 'ROLE_Buyer', // Add the role as a constant
          }}
          validationSchema={registrationSchema} // Validation schema
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              {/* Full Name */}
              <div className="form-group">
                <div className="input-wrapper">
                  <FaUser className="icon" />
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="form-input"
                  />
                </div>
                {errors.name && touched.name && (
                  <div className="error-message">{errors.name}</div>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <div className="input-wrapper">
                  <FaEnvelope className="icon" />
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="form-input"
                  />
                </div>
                {errors.email && touched.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <div className="input-wrapper">
                  <FaPhone className="icon" />
                  <Field
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="form-input"
                  />
                </div>
                {errors.phone && touched.phone && (
                  <div className="error-message">{errors.phone}</div>
                )}
              </div>

              {/* Address */}
              <div className="form-group">
                <div className="input-wrapper">
                  <FaMapMarkerAlt className="icon" />
                  <Field
                    name="address"
                    as="textarea"
                    placeholder="Enter your address"
                    className="form-input"
                  />
                </div>
                {errors.address && touched.address && (
                  <div className="error-message">{errors.address}</div>
                )}
              </div>

              {/* Password */}
              <div className="form-group">
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

              {/* Confirm Password */}
              <div className="form-group">
                <div className="input-wrapper">
                  <FaLock className="icon" />
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="form-input"
                  />
                </div>
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="error-message">{errors.confirmPassword}</div>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>

              {/* Links */}
              <div className="links">
                <Link to="/buyer-login" className="link">
                  Already have an account? Login
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Register;
