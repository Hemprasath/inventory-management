import React, { useState } from "react";
import "../csspage/adminlogin.css";
import { useNavigate } from "react-router-dom";

const Adminlogin = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError("⚠️ Please fill in both fields");
      return;
    }
    if(username === "admin" && password === "admin123"){
    setError("");
    navigate("/admindashboard");
  }else{
    setError("X invalid username and password!");
  }
    onLogin(username); // Call parent function to handle login
  };

  return (
    <div className="login-container">
      <h2>🔑 Admin Login</h2>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Adminlogin;