import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import "../styles/VerifyCode.css";

const VerifyCode = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState(null);
  const { handleVerifyCode } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleVerifyCode(email, code);
    setMessage(response.message);
  };

  return (
    <div className="verify-code-container">
      <h1 className="verify-code-title">Verify Code</h1>
      <form className="verify-code-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="verify-code-input"
        />
        <input
          type="text"
          placeholder="Verification Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="verify-code-input"
        />
        <button type="submit" className="verify-code-button">
          Verify Code
        </button>
      </form>
      {message && <p className="verify-code-message">{message}</p>}
    </div>
  );
};

export default VerifyCode;
