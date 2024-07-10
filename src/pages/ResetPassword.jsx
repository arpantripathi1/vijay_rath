import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../styles/ResetPassword.css";

const ResetPassword = () => {
  const [message, setMessage] = useState(null);
  const { handleResetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const token = query.get('token');

  const initialValues = {
    newPassword: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    newPassword: Yup.string().min(6, 'Password must be at least 6 characters long').required('New password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match').required('Confirm password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const { newPassword } = values;
    setSubmitting(true);
    const response = await handleResetPassword('', token, newPassword); // email parameter is empty
    if (response.success) {
      setMessage(response.message);
      navigate('/login');
    } else {
      setMessage(response.message);
      setSubmitting(false);
    }
  };

  return (
    <div className="reset-password-container">
      <h1 className="reset-password-title">Reset Password</h1>
      {message && <p className="reset-password-message">{message}</p>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="reset-password-form">
            <div className="form-group">
              <Field
                type="password"
                name="newPassword"
                placeholder="New Password"
                className="reset-password-input"
              />
              <ErrorMessage name="newPassword" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="reset-password-input"
              />
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>
            <button type="submit" className="reset-password-button" disabled={isSubmitting}>
              Reset Password
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassword;
