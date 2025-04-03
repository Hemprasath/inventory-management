import React from "react";
import { useNavigate } from "react-router-dom";
import "../csspage/welcome.css";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <h1>Welcome to Grocery Management</h1>
      <p>Select your role to continue</p>
      <div className="button-container">
        <button className="shop-owner-btn" onClick={() => navigate("/shopownerlogin")}> 🏪 Shop Owner</button>
        <button className="admin-btn" onClick={() => navigate("/adminlogin") }>🔑 Admin</button>
      </div>
    </div>
  );
};

export default Welcome
