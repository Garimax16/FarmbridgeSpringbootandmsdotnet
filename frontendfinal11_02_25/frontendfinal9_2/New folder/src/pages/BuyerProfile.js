// import React from "react";
// import { useNavigate } from "react-router-dom";

// import NavibarB from "../components/NaviBarB";
// import {Footer} from '../components/Footer';


// const BuyerProfile = () => {
//   const navigate = useNavigate();

//   // Mock user data
//   const userData = {
//     fullName: "Rahul Bharaskar",
//     email: "rahulbharaskar1234@gmail.com",
//     phone: "7977058182",
//   };

//   return (
//     <div
//       style={{
//         margin: "0",
//         padding: "0",
//         display: "flex",
//         flexDirection: "column",
//         height: "100vh",
//         width: "100%",
//       }}
//     >
//       <NavibarB/>
//       <div style={styles.container}>
//         <div style={styles.profileContainer}>
//           <h2>Profile Information</h2>
//           <div style={styles.infoGroup}>
//   <label style={styles.label}>Full Name:</label>
//   <p style={styles.data}>{userData.fullName}</p>
// </div>
// <div style={styles.infoGroup}>
//   <label style={styles.label}>Email:</label>
//   <p style={styles.data}>{userData.email}</p>
// </div>
// <div style={styles.infoGroup}>
//   <label style={styles.label}>Phone Number:</label>
//   <p style={styles.data}>{userData.phone}</p>
// </div>

//           <button
//             style={styles.editButton}
//             onClick={() => navigate("/edit-profile")}
//           >
//             Edit Profile
//           </button>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// // CSS-in-JS styles
// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f9f9f9",
//     padding: "0 10px",
//   },
//   profileContainer: {
//     width: "100%",
//     maxWidth: "500px",
//     padding: "20px",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   },
//   infoGroup: {
//     marginBottom: "10px", // Reduce the space between groups
//     display: "flex",
//     flexDirection: "column", // Ensures label and data are stacked
//   },
//   label: {
//     fontWeight: "bold", // Optional: to emphasize labels
//     marginBottom: "2px", // Adjust space between label and data
//   },
//   data: {
//     margin: "0", // Removes any extra margin around data
//   },
//   editButton: {
//     backgroundColor: "#76504b",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     width: "100%",
//     fontSize: "16px",
//   },
// };


// export default BuyerProfile;


//2nd

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import NavibarB from "../components/NaviBarB";
// import { Footer } from "../components/Footer";

// const BuyerProfile = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Fetch user profile
//     fetch("http://localhost:8080/users/profile", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`, // Include JWT token
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => setUserData(data))
//       .catch((error) => console.error("Error fetching profile:", error));
//   }, []);

//   if (!userData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div style={{ margin: "0", padding: "0", display: "flex", flexDirection: "column", height: "100vh", width: "100%" }}>
//       <NavibarB />
//       <div style={styles.container}>
//         <div style={styles.profileContainer}>
//           <h2>Profile Information</h2>
//           <div style={styles.infoGroup}>
//             <label style={styles.label}>Full Name:</label>
//             <p style={styles.data}>{userData.name}</p>
//           </div>
//           <div style={styles.infoGroup}>
//             <label style={styles.label}>Email:</label>
//             <p style={styles.data}>{userData.email}</p>
//           </div>
//           <div style={styles.infoGroup}>
//             <label style={styles.label}>Phone Number:</label>
//             <p style={styles.data}>{userData.phone}</p>
//           </div>
//           <div style={styles.infoGroup}>
//             <label style={styles.label}>Address:</label>
//             <p style={styles.data}>{userData.address}</p>
//           </div>
//           <div style={styles.infoGroup}>
//             <label style={styles.label}>Role:</label>
//             <p style={styles.data}>{userData.role}</p>
//           </div>
//           <button
//             style={styles.editButton}
//             onClick={() => navigate("/edit-profile")}
//           >
//             Edit Profile
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f9f9f9",
//     padding: "0 10px",
//   },
//   profileContainer: {
//     width: "100%",
//     maxWidth: "500px",
//     padding: "20px",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   },
//   infoGroup: {
//     marginBottom: "10px",
//     display: "flex",
//     flexDirection: "column",
//   },
//   label: {
//     fontWeight: "bold",
//     marginBottom: "2px",
//   },
//   data: {
//     margin: "0",
//   },
//   editButton: {
//     backgroundColor: "#76504b",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     width: "100%",
//     fontSize: "16px",
//   },
// };

// export default BuyerProfile;

//3rd
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import NavibarB from "../components/NaviBarB";
// import { Footer } from "../components/Footer";

// const BuyerProfile = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Fetch user profile
//     fetch("http://localhost:8080/users/profile", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`, // Include JWT token
//         email: localStorage.getItem("email"), // Include email
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => setUserData(data))
//       .catch((error) => console.error("Error fetching profile:", error));
//   }, []);

//   if (!userData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <NavibarB />
//       <div>
//         <h2>Profile Information</h2>
//         <p>Name: {userData.name}</p>
//         <p>Email: {userData.email}</p>
//         <p>Phone: {userData.phone}</p>
//         <p>Address: {userData.address}</p>
//         <p>Role: {userData.role}</p>
//         <button onClick={() => navigate("/edit-profile")}>Edit Profile</button>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BuyerProfile;



//4th
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import NavibarB from "../components/NaviBarB";
// import { Footer } from "../components/Footer";

// const BuyerProfile = () => {
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState('');

//   useEffect(() => {
//     // Fetch user profile without JWT token
//     fetch("http://localhost:8080/users/profile", {
//       method: "GET", // GET method to fetch profile
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => setUserData(data))
//       .catch((error) => console.error("Error fetching profile:", error));
//   }, []);

//   if (!userData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div style={{ margin: "0", padding: "0", display: "flex", flexDirection: "column", height: "100vh", width: "100%" }}>
//       <NavibarB />
//       <div style={styles.container}>
//         <div style={styles.profileContainer}>
//           <h2>Profile Information</h2>
//           <div style={styles.infoGroup}>
//             <label style={styles.label}>Full Name:</label>
//             <p style={styles.data}>{userData.name}</p>
//           </div>
//           <div style={styles.infoGroup}>
//             <label style={styles.label}>Email:</label>
//             <p style={styles.data}>{userData.email}</p>
//           </div>
//           <div style={styles.infoGroup}>
//             <label style={styles.label}>Phone Number:</label>
//             <p style={styles.data}>{userData.phone}</p>
//           </div>
//           <div style={styles.infoGroup}>
//             <label style={styles.label}>Address:</label>
//             <p style={styles.data}>{userData.address}</p>
//           </div>
//           <div style={styles.infoGroup}>
//             <label style={styles.label}>Role:</label>
//             <p style={styles.data}>{userData.role}</p>
//           </div>
//           <button
//             style={styles.editButton}
//             onClick={() => navigate("/edit-profile")}
//           >
//             Edit Profile
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f9f9f9",
//     padding: "0 10px",
//   },
//   profileContainer: {
//     width: "100%",
//     maxWidth: "500px",
//     padding: "20px",
//     backgroundColor: "#fff",
//     borderRadius: "10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//   },
//   infoGroup: {
//     marginBottom: "10px",
//     display: "flex",
//     flexDirection: "column",
//   },
//   label: {
//     fontWeight: "bold",
//     marginBottom: "2px",
//   },
//   data: {
//     margin: "0",
//   },
//   editButton: {
//     backgroundColor: "#76504b",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     width: "100%",
//     fontSize: "16px",
//   },
// };

// export default BuyerProfile;


//5th

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavibarB from "../components/NaviBarB";
import { Footer } from "../components/Footer";
import { toast } from "react-toastify";

const BuyerProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get the token from localStorage

    // Fetch user profile with JWT token
    fetch("http://localhost:8082/users/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUserData(data))
      .catch((error) => {
        console.error("Error fetching profile:", error);
        if (error.message.includes("403")) {
          toast.error("Session expired. Please log in again.");
          navigate("/buyer-login");
        }
      });
  }, [navigate]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ margin: "0", padding: "0", display: "flex", flexDirection: "column", height: "100vh", width: "100%" }}>
      <NavibarB />
      <div style={styles.container}>
        <div style={styles.profileContainer}>
          <h2>Profile Information</h2>
          <div style={styles.infoGroup}>
            <label style={styles.label}>Full Name:</label>
            <p style={styles.data}>{userData.name}</p>
          </div>
          <div style={styles.infoGroup}>
            <label style={styles.label}>Email:</label>
            <p style={styles.data}>{userData.email}</p>
          </div>
          <div style={styles.infoGroup}>
            <label style={styles.label}>Phone Number:</label>
            <p style={styles.data}>{userData.phone}</p>
          </div>
          <div style={styles.infoGroup}>
            <label style={styles.label}>Address:</label>
            <p style={styles.data}>{userData.address}</p>
          </div>
       
          <button
            style={styles.editButton}
            onClick={() => navigate("/edit-profile")}
          >
            Edit Profile
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "0 10px",
  },
  profileContainer: {
    width: "100%",
    maxWidth: "500px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  infoGroup: {
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "2px",
  },
  data: {
    margin: "0",
  },
  editButton: {
    backgroundColor: "#76504b",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    fontSize: "16px",
  },
};

export default BuyerProfile;
