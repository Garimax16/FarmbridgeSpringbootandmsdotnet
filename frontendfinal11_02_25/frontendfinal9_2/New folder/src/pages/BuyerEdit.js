import React, { useState, useEffect } from "react";
import Header from "../components/Header";

// Eye icon for password visibility toggle
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import BuyerService from "../Api/BuyerService";
import NavibarB from "../components/NaviBarB";
import { Footer } from "../components/Footer";

const BuyerEdit = () => {
  // State to manage form fields
  const [formData, setFormData] = useState({
  });
  const [passwordVisible, setPasswordVisible] = useState(false); // Toggle password visibility

  // Mock existing user data
  useEffect(() => {
    const fetchUserData = () => {
      BuyerService.getBuyerById().then(response=>
      {setFormData(response.data);console.log(response.data);});
      
    };

    fetchUserData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Phone number validation (check if it is exactly 10 digits)
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    try{
const t=localStorage.getItem('token');
const decodeToken = (token) => {
  const payload = token.split('.')[1];
  const decodedPayload = JSON.parse(atob(payload));
  return decodedPayload?.user_id;
};

const id = decodeToken(t);
         BuyerService.updateBuyer(id,formData).then(alert("User Updated successfully"));



    }
    catch(err){
alert("Error:"+err);
    }
    }
   

  // Handle cancel action
  const handleCancel = () => {
    if (window.confirm("Are you sure you want to discard changes?")) {
      window.location.reload(); // Reload the page to reset changes
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
    <div>
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <span onClick={togglePasswordVisibility} style={styles.eyeIcon}>
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div style={styles.formGroup}>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.contactNo}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
              onBlur={() => {
                if (!validatePhone(formData.contactNo)) {
                  alert("Phone number must be exactly 10 digits!");
                }
              }}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.actions}>
            <button type="submit" style={styles.saveButton}>
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleCancel}
              style={styles.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

// CSS-in-JS styles
const styles = { 
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "0 10px", // Add padding to avoid screen cut off on small devices
  },
  formContainer: {
    width: "100%",
    maxWidth: "500px", // Max width of form container
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },
  passwordContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: "10px",
    cursor: "pointer",
    fontSize: "18px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    gap: "10px",
  },
  saveButton: {
    backgroundColor: "#76504b",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#76504b",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

// Media Queries for responsiveness
const mediaQueries = {
  "@media (max-width: 768px)": {
    formContainer: {
      maxWidth: "100%",
      padding: "10px",
    },
    saveButton: {
      width: "100%",
    },
    cancelButton: {
      width: "100%",
    },
  },
  "@media (max-width: 480px)": {
    formContainer: {
      maxWidth: "100%",
      padding: "10px",
    },
    h2: {
      fontSize: "18px",
    },
    input: {
      fontSize: "14px",
      padding: "8px",
    },
    saveButton: {
      fontSize: "14px",
      padding: "10px",
    },
    cancelButton: {
      fontSize: "14px",
      padding: "10px",
    },
  },
};

export default BuyerEdit;

// import React, { useState } from "react";

// const UpdateUser = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     address: "",
//   });

//   // Update state as the user types
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:8080/users/me", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Assuming you use tokens
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         alert("User details updated successfully!");
//         console.log("Updated User:", result);
//       } else {
//         const error = await response.json();
//         alert(`Error: ${error.message}`);
//       }
//     } catch (err) {
//       console.error("Error updating user:", err);
//       alert("An error occurred while updating user details.");
//     }
//   };

//   return (
//     <div>
//       <h2>Update User Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Phone:</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateUser;
