import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api"; // ✅ FIXED
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import "./Admin.css";

export default function AdminLogin() {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post("/api/auth/login", creds); // ✅ FIXED
      login(res.data.token, res.data.username);
      toast.success("Welcome back!");
      navigate("/admin");
    } catch {
      toast.error("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="login-box">
        <div className="login-logo">
          <span>SOLAR</span>
          <span className="gold-text">BHAVISHYA</span>
        </div>
        <h2>Admin Panel</h2>
        <p>Solar Bhavishya Dashboard</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              value={creds.username}
              onChange={(e) => setCreds({ ...creds, username: e.target.value })}
              placeholder="nasirkhan"
              autoFocus
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              value={creds.password}
              onChange={(e) => setCreds({ ...creds, password: e.target.value })}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
