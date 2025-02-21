import React, { useState } from 'react';
import "../styles/ProfileEditPage.css"; 
import { Footer } from '../components/Footer';
import NavibarS from '../components/NavibarS';

function ProfileEditPage() {
  const [formData, setFormData] = useState({
    fullName: 'Tanya Singh',
    mobileNumber: '1234567890',
    emailAddress: 'tanya@gmail.com',
    district: 'Pune',
    village: 'Lohegaon',
  });

  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditable(false);
    console.log('Updated Profile Data:', formData);
  };

  const handleCancel = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <div>
      <NavibarS />
      <div className="profile-container">
        <div className="profile-card">
          <h2 className="profile-header"> Your Profile</h2>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              {isEditable ? (
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p>{formData.fullName}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number *</label>
              {isEditable ? (
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
              ) : (
                <p>{formData.mobileNumber}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="emailAddress">Email Address *</label>
              {isEditable ? (
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p>{formData.emailAddress}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="district">District *</label>
              {isEditable ? (
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p>{formData.district}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="village">Village *</label>
              {isEditable ? (
                <input
                  type="text"
                  id="village"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p>{formData.village}</p>
              )}
            </div>

            {!isEditable && (
              <div className="edit-btn-container">
                <button type="button" onClick={handleEdit} className="edit-btn">Edit</button>
              </div>
            )}

            {isEditable && (
              <div className="action-buttons">
                <button type="button" onClick={handleSave} className="save-btn">Save</button>
                <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileEditPage;