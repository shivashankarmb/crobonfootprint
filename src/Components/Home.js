import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="chatgpt-card">
        <h1>INVOICE PROCESSING TOOL</h1>
        <p>This is the Home page. Here you can see some information.</p>
        <button className="create-invoice-btn" onClick={() => navigate("/dashboard")}>
          Create Invoice
        </button>
      </div>
    </div>
  );
}

export default Home;