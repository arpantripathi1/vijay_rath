import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import "../styles/SignUp.css";

const SignUp = ({ setIsHomePage }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const { handleSignup, handleGoogleSignup } = useContext(AuthContext);

  useEffect(() => {
    setIsHomePage(false);
    return () => setIsHomePage(true);
  }, [setIsHomePage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await handleSignup(username, email, password);
      if (response.success) {
        navigate('/');
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleGoogleSuccess = async (tokenResponse) => {
    try {
      const token = tokenResponse.credential;
      const response = await handleGoogleSignup(token);
      if (response.success) {
        navigate('/');
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  const handleGoogleFailure = () => {
    setErrorMessage('Google signup failed. Please try again.');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-form-container">
          <h1 className="signup-title">Create your account</h1>
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              useOneTap
              render={(renderProps) => (
                <button className="google-signup-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <FcGoogle className='google-icon' />
                  Continue with Google
                </button>
              )}
            />
          </GoogleOAuthProvider>
          <div className="separator">or</div>
          <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="signup-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-input"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-input"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="signup-input"
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
          <div className="login-link-container">
            Already have an account? <NavLink to="/login" className="login-link">Log in</NavLink>
          </div>
          <div className="terms-privacy">
            By creating your account, you agree to the <NavLink to="/terms">Terms of Service</NavLink> and <NavLink to="/privacy">Privacy Policy</NavLink>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
