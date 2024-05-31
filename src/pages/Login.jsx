import React, { useState, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Import from your AuthContext
import "../styles/Login.css";


const Login = ({setIsHomePage}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const { handleLogin } = useContext(AuthContext); // Use context for login logic
  const navigate = useNavigate();

  useEffect(() => {
    setIsHomePage(false);
    return () => setIsHomePage(true); // Reset when component unmounts
  }, [setIsHomePage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await handleLogin(username, password); // Call login function from context
      if (response.success) {
        navigate('/'); // Redirect to protected route on success
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="login-button">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
