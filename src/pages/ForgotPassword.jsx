// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import "../styles/ForgotPassword.css";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState(null);
//   const { handleForgotPassword } = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await handleForgotPassword(email);
//     setMessage(response.message);
//   };

//   return (
//     <div className="forgot-password-container">
//       <h1 className="forgot-password-title">Forgot Password</h1>
//       <form className="forgot-password-form" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="forgot-password-input"
//         />
//         <button type="submit" className="forgot-password-button">
//           Send Reset Email
//         </button>
//       </form>
//       {message && <p className="forgot-password-message">{message}</p>}
//     </div>
//   );
// };

// export default ForgotPassword;



import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const { handleForgotPassword } = useContext(AuthContext);
  const [message, setMessage] = useState(null);  // Add this line

  const initialValues = {
    email: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required')
  });

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true);
    const response = await handleForgotPassword(values.email);
    if (response.success) {
      setMessage(response.message);
    } else {
      setFieldError('email', response.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="forgot-password-container">
      <h1 className="forgot-password-title">Forgot Password</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="forgot-password-form">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="forgot-password-input"
            />
            <ErrorMessage name="email" component="div" className="error-message" />
            <button type="submit" className="forgot-password-button" disabled={isSubmitting}>
              Send Reset Email
            </button>
          </Form>
        )}
      </Formik>
      {message && <p className="forgot-password-message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
