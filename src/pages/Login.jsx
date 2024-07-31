// import React, { useContext, useEffect, useState } from 'react';
// import { NavLink, useNavigate, useLocation } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import "../styles/Login.css";

// const Login = ({ setIsHomePage }) => {
//   const [errorMessage, setErrorMessage] = useState(null);
//   const { handleLogin } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { redirectTo, selectedPlan } = location.state || {};

//   useEffect(() => {
//     setIsHomePage(false);
//     return () => setIsHomePage(true);
//   }, [setIsHomePage]);

//   const initialValues = {
//     email: '',
//     password: ''
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string().email('Invalid email format').required('Email is required'),
//     password: Yup.string().required('Password is required')
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     setSubmitting(true);
//     try {
//       const response = await handleLogin(values.email, values.password);
//       console.log("login response is", response);
//       if (response.success) {
//         if (redirectTo && selectedPlan) {
//           navigate(redirectTo, { state: { selectedPlan } });
//         } else {
//           navigate('/');
//         }
//       } else {
//         setErrorMessage(response.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setErrorMessage('An error occurred. Please try again.');
//     }
//     setSubmitting(false);
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <div className="login-form-container">
//           <h1 className="login-title">Login</h1>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ isSubmitting }) => (
//               <Form className="login-form">
//                 <Field
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="login-input"
//                 />
//                 <ErrorMessage name="email" component="div" className="error-message" />
//                 <Field
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   className="login-input"
//                 />
//                 <ErrorMessage name="password" component="div" className="error-message" />
//                 {errorMessage && <p className="error-message">{errorMessage}</p>}
//                 <button type="submit" className="login-button" disabled={isSubmitting}>
//                   Sign In
//                 </button>
//               </Form>
//             )}
//           </Formik>
//           <div className="login-link-container">
//             <NavLink to="/new-password" className="login-link">Forgot Password?</NavLink>
//           </div>
//           <div className="login-link-container">
//             Create new account? <NavLink to="/signup" className="login-link">Sign Up</NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


//using toastify
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Login.css";

const Login = ({ setIsHomePage }) => {
  const { handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { redirectTo, selectedPlan } = location.state || {};

  useEffect(() => {
    setIsHomePage(false);
    return () => setIsHomePage(true);
  }, [setIsHomePage]);

  const initialValues = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const response = await handleLogin(values.email, values.password);
      console.log("login response is", response);
      if (response.success) {
        toast.success('Login successful!');
        if (redirectTo && selectedPlan) {
          navigate(redirectTo, { state: { selectedPlan } });
        } else {
          navigate('/');
        }
      } else {
        toast.error(response.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred. Please try again.');
    }
    setSubmitting(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-container">
          <h1 className="login-title">Login</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="login-form">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="login-input"
                />
                <ErrorMessage name="email" component="div" className="error-message" />
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="login-input"
                />
                <ErrorMessage name="password" component="div" className="error-message" />
                <button type="submit" className="login-button" disabled={isSubmitting}>
                  Sign In
                </button>
              </Form>
            )}
          </Formik>
          <div className="login-link-container">
            <NavLink to="/new-password" className="login-link">Forgot Password?</NavLink>
          </div>
          <div className="login-link-container">
            Create new account? <NavLink to="/signup" className="login-link">Sign Up</NavLink>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
