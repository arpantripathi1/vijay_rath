// import React, { createContext, useState, useEffect } from 'react';

// const initialAuthState = {
//   isAuthenticated: false,
//   user: null,
//   token: null,
//   setError: (error) => {},
//   setLoggedIn: (user, token) => {},
//   logout: () => {},
// };

// const AuthContext = createContext(initialAuthState);

// const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState(initialAuthState);

//   // Implement functions for login, logout, error handling, etc.
//   // (These would interact with your backend API)

//   useEffect(() => {
//     // Check for existing auth state on page load
//     const token = localStorage.getItem('auth_token');
//     if (token) {
//       // Fetch user data based on token (if needed)
//       setAuthState({
//         isAuthenticated: true,
//         token,
//         // ...user data
//       });
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };




// new code
import React, { createContext, useState } from 'react';
import axios from 'axios';
// import { Navigate } from 'react-router-dom';

const initialAuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  setError: (error) => {},
  setLoggedIn: (user, token) => {},
  logout: () => {},
  handleSignup: async () => {},
  handleForgotPassword: async () => {},
  handleResetPassword: async () => {},
  handleGoogleSignup: async () => {},
};

const AuthContext = createContext(initialAuthState);

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(initialAuthState);

  const setLoggedIn = (user, token) => {
    localStorage.setItem('auth_token', token);
    setAuthState({
      isAuthenticated: true,
      user,
      token,
    });
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setAuthState(initialAuthState);
  };

  const handleSignup = async (username, email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/signup', { name: username, email, password });
      const { token, user } = response.data;
      setLoggedIn(user, token);
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.response.data.message };
    }
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/login', { email, password });
      const { token, userId } = response.data;
      setLoggedIn({ id: userId }, token);
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.response.data.message };
    }
  };

  const handleGoogleSignup = async (token) => {
    try {
      const response = await axios.post('http://localhost:8080/google-signup', { token });
      const { token: authToken, user } = response.data;
      setLoggedIn(user, authToken);
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.response.data.message };
    }
  };

  // in case if i want ti fetch user data from token we can do it
  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('http://localhost:8080/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleForgotPassword = async (email) => {
    try {
      const response = await axios.post('http://localhost:8080/forgot-password', { email });
      return { success: true, message: response.data.message };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.response.data.message };
    }
  };

  const handleResetPassword = async (token, newPassword) => {
    try {
      const response = await axios.post('http://localhost:8080/reset-password', { token, newPassword });
      return { success: true, message: response.data.message };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.response.data.message };
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, setLoggedIn, logout, handleSignup, handleLogin, handleGoogleSignup, handleForgotPassword, handleResetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
