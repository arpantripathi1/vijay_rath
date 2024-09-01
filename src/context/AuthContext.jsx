// // new code
// import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';
// // import { Navigate } from 'react-router-dom';

// const initialAuthState = {
//   isAuthenticated: false,
//   user: null,
//   token: null,
//   setError: (error) => {},
//   setLoggedIn: (user, token) => {},
//   logout: () => {},
//   handleSignup: async () => {},
//   handleForgotPassword: async () => {},
//   handleResetPassword: async () => {},
//   handleGoogleSignup: async () => {},
// };

// const AuthContext = createContext(initialAuthState);

// const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState(initialAuthState);

//   useEffect(() => {
//     const token = localStorage.getItem('auth_token');
//     if (token) {
//       fetchUserData(token);
//     }
//   }, [initialAuthState.isAuthenticated]);

//     // in case if i want ti fetch user data from token we can do it
//     const fetchUserData = async (token) => {
//       try {
//         const response = await axios.get('http://localhost:8080/user', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         console.log(" fetched user data while  login is ", response.data);
//       //   return response.data;
//       // } catch (error) {
//       //   console.error(error);
//       //   return null;
//       // }
//       setLoggedIn(response.data, token);
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       logout();
//     }
//     };
  

//   const setLoggedIn = (user, token) => {
//     localStorage.setItem('auth_token', token);
//     setAuthState({
//       isAuthenticated: true,
//       user,
//       token,
//     });
//   };

//   const logout = () => {
//     localStorage.removeItem('auth_token');
//     setAuthState(initialAuthState);
//   };

//   const handleSignup = async (username, email, password) => {
//     try {
//       const response = await axios.post('http://localhost:8080/signup', { name: username, email, password });
//       const { token, user } = response.data;
//       setLoggedIn(user, token);
//       return { success: true };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };

//   const handleLogin = async (email, password) => {
//     try {
//       console.log("login details are",email,password);
//       const response = await axios.post('http://localhost:8080/login', { email, password });
//       console.log("response in login",response);
//       const { token, userId } = response.data;
//       console.log("login saved details are",token,"   and   ",userId);

//       setLoggedIn({ id: userId }, token);
//       return { success: true };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };

//   const handleGoogleSignup = async (token) => {
//     try {
//       const response = await axios.post('http://localhost:8080/google-signup', { token });
//       const { token: authToken, user } = response.data;
//       setLoggedIn(user, authToken);
//       return { success: true };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };


//   const handleForgotPassword = async (email) => {
//     try {
//       const response = await axios.post('http://localhost:8080/forgot-password', { email });
//       console.log("client forgot response is",response);
//       return { success: true, message: response.data.message };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };

//   // const handleResetPassword = async (token, newPassword) => {
//   //   try {
//   //     const response = await axios.post('http://localhost:8080/reset-password', { token, newPassword });
//   //     return { success: true, message: response.data.message };
//   //   } catch (error) {
//   //     console.error(error);
//   //     return { success: false, message: error.response.data.message };
//   //   }
//   // };

//   const handleVerifyCode = async (email, code) => {
//     try {
//       const response = await axios.post('http://localhost:8080/verify-code', { email, code });
//       return { success: true, message: response.data };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };
  
//   const handleResetPassword = async (email, code, newPassword) => {
//     try {
//       const response = await axios.post('http://localhost:8080/reset-password', { email, code, newPassword });
//       const { token, user } = response.data;
//       setLoggedIn(user, token);
//       return { success: true, message: response.data };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ ...authState, setLoggedIn, logout, handleSignup, handleLogin, handleGoogleSignup, handleVerifyCode , handleForgotPassword, handleResetPassword }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };



// import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import {jwtDecode} from 'jwt-decode'; // Make sure this import is correct

// const initialAuthState = {
//   isAuthenticated: false,
//   user: null,
//   token: null,
//   setError: (error) => {},
//   setLoggedIn: (user, token) => {},
//   logout: () => {},
//   handleSignup: async () => {},
//   handleForgotPassword: async () => {},
//   handleResetPassword: async () => {},
//   handleGoogleSignup: async () => {},
// };

// const AuthContext = createContext(initialAuthState);

// const AuthProvider = ({ children }) => {
//   const [authState, setAuthState] = useState(initialAuthState);

//   // useEffect(() => {
//   //   const token = localStorage.getItem('auth_token');
//   //   if (token) {
//   //     fetchUserData(token);
//   //   }
//   // }, []);

//   // const fetchUserData = async (token) => {
//   //   try {
//   //     const decodedToken = jwtDecode(token);
//   //     const response = await axios.get(`http://localhost:8080/user/${decodedToken.id}`, {
//   //       headers: { Authorization: `Bearer ${token}` },
//   //     });
//   //     console.log("Fetched user data:", response.data);
//   //     setLoggedIn(response.data, token);
//   //   } catch (error) {
//   //     console.error('Error fetching user data:', error);
//   //     logout();
//   //   }
//   // };



//   //enable this so that rehydrated functuion will run

//   useEffect(() => {
//     rehydrateAuth();
//   }, []);

  
//   const rehydrateAuth = () => {
//     const token = localStorage.getItem('auth_token');
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         // Check if token is expired
//         if (decodedToken.exp * 1000 > Date.now()) {
//           setAuthState({
//             isAuthenticated: true,
//             user: { id: decodedToken.id, email: decodedToken.email },
//             token,
//           });
//         } else {
//           // If token is expired, remove it from localStorage
//           localStorage.removeItem('auth_token');
//         }
//       } catch (error) {
//         console.error('Invalid token:', error);
//         localStorage.removeItem('auth_token');
//       }
//     }
//   };



//   const setLoggedIn = (user, token) => {
//     localStorage.setItem('auth_token', token);
//     setAuthState({
//       isAuthenticated: true,
//       user,
//       token,
//     });
//   };

//   const logout = () => {
//     // List of keys related to authentication
//     const authKeys = ['auth_token', 'rzp_device_id', 'rzp_checkout_anon_id'];
  
//     // Remove each key from local storage
//     authKeys.forEach(key => localStorage.removeItem(key));
  
//     // Reset the auth state
//     setAuthState(initialAuthState);
//   };

//   const handleSignup = async (username, email, password) => {
//     try {
//       const response = await axios.post('http://localhost:8080/signup', { name: username, email, password });
//       const { token, user } = response.data;
//       setLoggedIn(user, token);
//       return { success: true };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };

//   const handleLogin = async (email, password) => {
//     try {
//       console.log("Login details are:", email, password);
//       const response = await axios.post('http://localhost:8080/login', { email, password });
//       console.log("Response in login:", response);
//       const { token, user } = response.data;
//       console.log("Login saved details are:", token, " and ", user);

//       setLoggedIn(user, token);
//       console.log("authstate is ",authState);
//       return { success: true };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };

//   const handleGoogleSignup = async (token) => {
//     try {
//       const response = await axios.post('http://localhost:8080/google-signup', { token });
//       const { token: authToken, user } = response.data;
//       setLoggedIn(user, authToken);
//       return { success: true };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };

//   const handleForgotPassword = async (email) => {
//     try {
//       const response = await axios.post('http://localhost:8080/forgot-password', { email });
//       console.log("Client forgot response is:", response);
//       return { success: true, message: response.data.message };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };

//   const handleVerifyCode = async (email, code) => {
//     try {
//       const response = await axios.post('http://localhost:8080/verify-code', { email, code });
//       return { success: true, message: response.data };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };
  
//   const handleResetPassword = async (email, code, newPassword) => {
//     try {
//       const response = await axios.post('http://localhost:8080/reset-password', { email, code, newPassword });
//       const { token, user } = response.data;
//       setLoggedIn(user, token);
//       return { success: true, message: response.data };
//     } catch (error) {
//       console.error(error);
//       return { success: false, message: error.response.data.message };
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ ...authState, setLoggedIn, logout, handleSignup, handleLogin, handleGoogleSignup, handleVerifyCode , handleForgotPassword, handleResetPassword }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export { AuthContext, AuthProvider };





// last commented

import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

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

  useEffect(() => {
    rehydrateAuth();
  }, []);

  const rehydrateAuth = () => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        // Check if token is expired
        if (decodedToken.exp * 1000 > Date.now()) {
          setAuthState(prevState => ({
            ...prevState, // Use the spread operator to maintain other state properties
            isAuthenticated: true,
            user: { id: decodedToken.id, email: decodedToken.email },
            token,
          }));
        } else {
          // If token is expired, remove it from localStorage
          localStorage.removeItem('auth_token');
        }
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('auth_token');
      }
    }
  };

  const setLoggedIn = (user, token) => {
    localStorage.setItem('auth_token', token);
    setAuthState(prevState => ({
      ...prevState, // Use the spread operator to maintain other state properties
      isAuthenticated: true,
      user,
      token,
    }));
  };

  const logout = () => {
    const authKeys = ['auth_token', 'rzp_device_id', 'rzp_checkout_anon_id'];
    authKeys.forEach(key => localStorage.removeItem(key));
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
      console.log("Login details are:", email, password);
      const response = await axios.post('http://localhost:8080/login', { email, password });
      console.log("Response in login:", response);
      const { token, user } = response.data;
      console.log("Login saved details are:", token, " and ", user);

      setLoggedIn(user, token);
      console.log("authState after login inside context:", authState);
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

  const handleForgotPassword = async (email) => {
    try {
      const response = await axios.post('http://localhost:8080/forgot-password', { email });
      console.log("Client forgot response is:", response);
      return { success: true, message: response.data.message };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.response.data.message };
    }
  };

  const handleVerifyCode = async (email, code) => {
    try {
      const response = await axios.post('http://localhost:8080/verify-code', { email, code });
      return { success: true, message: response.data };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.response.data.message };
    }
  };
  
  const handleResetPassword = async (email, code, newPassword) => {
    try {
      const response = await axios.post('http://localhost:8080/reset-password', { email, code, newPassword });
      const { token, user } = response.data;
      setLoggedIn(user, token);
      return { success: true, message: response.data };
    } catch (error) {
      console.error(error);
      return { success: false, message: error.response.data.message };
    }
  };

  return (
    <AuthContext.Provider value={{ ...authState, setLoggedIn, logout, handleSignup, handleLogin, handleGoogleSignup, handleVerifyCode , handleForgotPassword, handleResetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
