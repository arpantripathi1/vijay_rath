// import React, { useContext, useEffect, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { FcGoogle } from "react-icons/fc";
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import "../styles/SignUp.css";

// const SignUp = ({ setIsHomePage }) => {
//   const [errorMessage, setErrorMessage] = useState(null);
//   const navigate = useNavigate();
//   const { handleSignup, handleGoogleSignup } = useContext(AuthContext);

//   useEffect(() => {
//     setIsHomePage(false);
//     return () => setIsHomePage(true);
//   }, [setIsHomePage]);

//   const initialValues = {
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   };

//   const validationSchema = Yup.object({
//     username: Yup.string().required('Username is required'),
//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Confirm password is required')
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     setSubmitting(true);
//     try {
//       const response = await handleSignup(values.username, values.email, values.password);
//       if (response.success) {
//         navigate('/');
//       } else {
//         setErrorMessage(response.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('An error occurred. Please try again.');
//     }
//     setSubmitting(false);
//   };

//   const handleGoogleSuccess = async (tokenResponse) => {
//     try {
//       const token = tokenResponse.credential;
//       const response = await handleGoogleSignup(token);
//       if (response.success) {
//         navigate('/');
//       } else {
//         setErrorMessage(response.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('An error occurred. Please try again.');
//     }
//   };

//   const handleGoogleFailure = () => {
//     setErrorMessage('Google signup failed. Please try again.');
//   };

//   return (
//     <div className="signup-page">
//       <div className="signup-container">
//         <div className="signup-form-container">
//           <h1 className="signup-title">Create your account</h1>
//           <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
//             <GoogleLogin
//               onSuccess={handleGoogleSuccess}
//               onError={handleGoogleFailure}
//               useOneTap
//               render={(renderProps) => (
//                 <button className="google-signup-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
//                   <FcGoogle className='google-icon' />
//                   Continue with Google
//                 </button>
//               )}
//             />
//           </GoogleOAuthProvider>
//           <div className="separator">or</div>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form className="signup-form">
//                 <Field
//                   type="text"
//                   name="username"
//                   placeholder="Username"
//                   className="signup-input"
//                 />
//                 <ErrorMessage name="username" component="div" className="error-message" />

//                 <Field
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="signup-input"
//                 />
//                 <ErrorMessage name="email" component="div" className="error-message" />

//                 <Field
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className="signup-input"
//                 />
//                 <ErrorMessage name="password" component="div" className="error-message" />

//                 <Field
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm Password"
//                   className="signup-input"
//                 />
//                 <ErrorMessage name="confirmPassword" component="div" className="error-message" />

//                 {errorMessage && <p className="error-message">{errorMessage}</p>}
//                 <button type="submit" className="signup-button" disabled={isSubmitting}>
//                   Sign Up
//                 </button>
//               </Form>
//             )}
//           </Formik>
//           <div className="login-link-container">
//             Already have an account? <NavLink to="/login" className="login-link">Log in</NavLink>
//           </div>
//           <div className="terms-privacy">
//             By creating your account, you agree to the <NavLink to="/terms">Terms of Service</NavLink> and <NavLink to="/privacy">Privacy Policy</NavLink>.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



//using toastify
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FcGoogle } from "react-icons/fc";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/SignUp.css";

const SignUp = ({ setIsHomePage }) => {
  const navigate = useNavigate();
  const { handleSignup, handleGoogleSignup } = useContext(AuthContext);

  useEffect(() => {
    setIsHomePage(false);
    return () => setIsHomePage(true);
  }, [setIsHomePage]);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const response = await handleSignup(values.username, values.email, values.password);
      if (response.success) {
        toast.success('Signup successful!');
        navigate('/');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    }
    setSubmitting(false);
  };

  const handleGoogleSuccess = async (tokenResponse) => {
    try {
      const token = tokenResponse.credential;
      const response = await handleGoogleSignup(token);
      if (response.success) {
        toast.success('Google signup successful!');
        navigate('/');
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    }
  };

  const handleGoogleFailure = () => {
    toast.error('Google signup failed. Please try again.');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-form-container">
          <h1 className="signup-title">Create your account</h1>
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
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
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="signup-form">
                <Field
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="signup-input"
                />
                <ErrorMessage name="username" component="div" className="error-message" />

                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="signup-input"
                />
                <ErrorMessage name="email" component="div" className="error-message" />

                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="signup-input"
                />
                <ErrorMessage name="password" component="div" className="error-message" />

                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="signup-input"
                />
                <ErrorMessage name="confirmPassword" component="div" className="error-message" />

                <button type="submit" className="signup-button" disabled={isSubmitting}>
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>
          <div className="login-link-container">
            Already have an account? <NavLink to="/login" className="login-link">Log in</NavLink>
          </div>
          <div className="terms-privacy">
            By creating your account, you agree to the <NavLink to="/terms">Terms of Service</NavLink> and <NavLink to="/privacy">Privacy Policy</NavLink>.
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
