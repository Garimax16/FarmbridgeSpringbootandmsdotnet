import React, { useState } from 'react';
import "../styles/AdminDashboard.css";
import {Footer} from '../components/Footer';
import NavibarA from '../components/NavibarA';

// ProfileTable Component
const ProfileTable = ({ profiles, type }) => {
  const adminName = "Hello, Garima Khasdeo";
  return (
   <div>
  
<div>

    {/* <header style={headerStyle}>
        <h2 style={headerTitleStyle}>Welcome to the Admin Panel</h2>
        <p style={adminNameStyle}>{adminName}</p>
      </header> */}


     

    <div className="profile-table">
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>District</th>
            <th>Village</th>
            <th>Aadhaar Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => (
            <tr key={profile.id}>
              <td>{profile.fullName}</td>
              <td>{profile.mobileNumber}</td>
              <td>{profile.email}</td>
              <td>{profile.district}</td>
              <td>{profile.village}</td>
              <td>{profile.aadhaarNumber}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
   </div> 
   </div>
  );
};

// AdminDashboard Component
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('farmers');

  const [farmers] = useState([
    { id: 1, fullName: 'Kartikay Dhakad', mobileNumber: '9876543210', email: 'kd@gmail.com', district: 'Pune', village: 'Vadgaon', aadhaarNumber: '123456789012' },
    { id: 2, fullName: 'Hachi', mobileNumber: '9123456789', email: 'hachi@egmail.com', district: 'Pune', village: 'Lohegaon', aadhaarNumber: '987654321098' },
  ]);

  const [consumers] = useState([
    { id: 1, fullName: 'Dipesh Bhambhani', mobileNumber: '8234567890', email: 'dipesh@gmail.com', district: 'Surat', village: 'Saroli', aadhaarNumber: '112233445566' },
    { id: 2, fullName: 'Shamu', mobileNumber: '8765432109', email: 'shamu@gmail.com', district: 'Narmadapuram', village: 'Pipariya', aadhaarNumber: '667788990011' },
  ]);

  return (
    <div>
    <NavibarA/>

    <div className="admin-dashboard">
      
      <h1>Profile Management</h1>
      
      <div className="tabs" >
        <button id="btn1"
          className={`tab-button ${activeTab === 'farmers' ? 'active' : ''}`}
          onClick={() => setActiveTab('farmers')}
        >
          Farmers
        </button>
        <button 
          className={`tab-button ${activeTab === 'consumers' ? 'active' : ''}`}
          onClick={() => setActiveTab('consumers')}
        >
          Consumers
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'farmers' && (
          <div>
            <h2>Farmers Profiles</h2>
            <ProfileTable profiles={farmers} type="Farmer" />
          </div>
        )}
        {activeTab === 'consumers' && (
          <div>
            <h2>Consumers Profiles</h2>
            <ProfileTable profiles={consumers} type="Consumer" />
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

const headerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor:'#2e7d32',
  height: "60px",
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 20px",
};

const headerTitleStyle = {
  color: "white",
  textAlign: "center",
  flex: 1,
  fontSize: "20px",
  margin: "0",
};

const adminNameStyle = {
  color: "white",
  fontSize: "18px",
  margin: "0",
};



export default AdminDashboard;