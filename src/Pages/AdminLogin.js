import React, { useState } from 'react';
import axios from 'axios';
import './AdminLogin.css'; // Import the CSS file here

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/AdminLogin', {
        username,
        password
      });

      // Save the token in local storage
      localStorage.setItem('token', response.data.token);

      // Redirect or update UI upon successful login
      window.location.href = '/AdminDashboard';
    } catch (error) {
      const errorMessage = error.response?.data.message || 'Failed to login';
          setError(errorMessage);
          console.error('Error logging in:', errorMessage);
    }
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="admin-login-form" onSubmit={handleLogin}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="admin-login-button">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
