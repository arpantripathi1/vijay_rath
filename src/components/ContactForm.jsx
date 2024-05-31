import React, { useState } from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Implement form submission logic here
    // You can use methods like fetch or a library like Axios to send data
    // to a server or API.

    console.log('Form submitted:', formData); // Example logging for development

    // After successful submission, you can optionally reset the form data:
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
      <div className="contact-section">
        <div className="contact-info">
          <h1>Contact Us Today</h1>
          <p>Have any questions or feedback? Reach out to us via the form below for prompt assistance.</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
