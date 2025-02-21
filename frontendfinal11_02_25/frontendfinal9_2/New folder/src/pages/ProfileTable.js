import React from 'react';
import { Footer } from "../components/Footer";

const ProfileTable = ({ profiles, type }) => {
  return (
    <div className="profile-table">
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
            <th>Address</th>
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
              <td>{profile.address}</td>
              
              <td>{profile.aadhaarNumber}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer/>
    </div>
  );
};

export default ProfileTable;
