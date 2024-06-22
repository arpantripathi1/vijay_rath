import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const { handleForgotPassword } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleForgotPassword(email);
    setMessage(response.message);
  };

  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-title">Forgot Password</h1>
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="forgot-password-input"
        />
        <button type="submit" className="forgot-password-button">
          Send Reset Email
        </button>
      </form>
      {message && <p className="forgot-password-message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
