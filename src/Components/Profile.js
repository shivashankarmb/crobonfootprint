import React, { useState } from "react";
import "./Profile.css"; // Import your CSS file

function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    address: "123 Street Name",
    contactNumber: "9876543210",
    city: "New York",
    state: "NY",
    password: "",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      {/* Profile Form Section */}
      <div className="profile-form-section">
        <h2>Edit Profile</h2>
        <div className="profile-picture">
          <label htmlFor="imageUpload">
            <img
              src={profileImage || "https://via.placeholder.com/100"}
              alt="Profile"
              className="profile-img"
            />
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </div>

        <form className="profile-form">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} disabled />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Contact Number</label>
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" name="state" value={formData.state} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </div>

          <div className="buttons">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="save-btn">Save</button>
          </div>
        </form>
      </div>

      {/* Profile Summary Section */}
      <div className="profile-summary">
        <h2>Profile Summary</h2>
        <img src={profileImage || "https://via.placeholder.com/100"} alt="Profile" className="summary-img" />
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Address:</strong> {formData.address}</p>
        <p><strong>Contact Number:</strong> {formData.contactNumber}</p>
        <p><strong>City:</strong> {formData.city}</p>
        <p><strong>State:</strong> {formData.state}</p>
      </div>
    </div>
  );
}

export default Profile;
