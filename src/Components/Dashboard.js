import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"; // Import CSS

function Dashboard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const navigate = useNavigate();

  // Hardcoded extracted text (Same as Flask)
  const HARDCODED_TEXT = `
INVOICE

ITEMS       QUANTITY   PRICE
--------------------------------
CHICKEN     1          200
TOMATO      2          400
POTATO      3          500
ONION       4          600
GARLIC      5          700
CHILLI      6          800
  `;

  // Handles file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setExtractedText(""); // Reset previous extracted text
  };

  // Simulates text extraction after clicking the button
  const handleExtractText = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    // Mimic processing delay
    setTimeout(() => {
      setExtractedText(HARDCODED_TEXT);
      alert("Text extracted successfully!");
    }, 1000);
  };

  // Navigation handlers
  const goToHome = () => navigate("/home");
  const goToProfile = () => navigate("/profile");
  const handleLogout = () => navigate("/");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Invoice Dashboard</h2>
        <ul>
          <li onClick={goToHome} style={{ cursor: "pointer" }}>Home</li>
          <li><a href="#">Invoices</a></li>
          <li><a href="#">Reports</a></li>
          <li onClick={goToProfile} style={{ cursor: "pointer" }}>Profile</li>
          <li onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>Welcome to Your Dashboard</h1>

        {/* File Upload Section */}
        <div className="file-upload">
          <label htmlFor="fileInput" className="file-label">Select a file:</label>
          <input type="file" id="fileInput" onChange={handleFileChange} className="file-input" />
          <button className="upload-btn" onClick={handleExtractText}>Extract Text</button>
          {selectedFile && <p>Selected File: {selectedFile.name}</p>}
        </div>

        {/* Display Extracted Text */}
        {extractedText && (
          <div className="invoice-text">
            <h2>Extracted Text</h2>
            <pre>{extractedText}</pre>
          </div>
        )}
      </main>
    </div>
  );
}

export default Dashboard;