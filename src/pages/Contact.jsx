// src/Contact.js
import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';
// import './Contact.css';

const Contact = ({setIsHomePage}) => {
    useEffect(() => {
        setIsHomePage(false);
        return () => setIsHomePage(true); // Reset when component unmounts
      }, [setIsHomePage]);

    return (
        <>
        <PageHeader text="Get In Touch" />
        <ContactForm />
        </>
    );
}

export default Contact;
