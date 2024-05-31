// src/About.js
import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import About4 from '../components/About4';
import AboutBanner from '../components/AboutBanner';


const About = ({setIsHomePage}) => {

    useEffect(() => {
        setIsHomePage(false);
        return () => setIsHomePage(true); // Reset when component unmounts
      }, [setIsHomePage]);


      const commitmentHeading = [
        {
          main_heading: "Empowering Connections, Enabling Success",
          sub_heading: "Vijay Rath is a revolutionary platform that provides students with exclusive access to HR emails and contact details. Our interface offers a curated selection of 30 emails and 10 numbers, with the ability to refresh for new contacts effortlessly. Students can also upload their information for automated distribution and seamless communication with potential recruiters.",
        },
      ]
    
      const commitmentInfo = [
        {
          content_heading: "our commitment",
          content_body: "At Vijay Rath, our mission is to empower students by providing them with the tools and resources needed to effortlessly update their information and connect with potential recruiters. We strive to bridge the gap between students and recruiters, making the job search process more efficient and effective.",
          picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPqXokJh37SKSHIWAtYo9COBaO5uQ5xFkTg&s",
          float: "left"
        },
        {
          content_heading: "Core Values",
          content_body: "Innovation: Constantly evolving to meet the needs of students and recruiters.\n Transparency: Ensuring a clear and honest communication process for all users.\nEmpowerment: Enabling students to take control of their job search journey.",
          picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPqXokJh37SKSHIWAtYo9COBaO5uQ5xFkTg&s",
          float: "right"
        },
        {
          content_heading: "our commitment",
          content_body: "At Vijay Rath, our mission is to empower students by providing them with the tools and resources needed to effortlessly update their information and connect with potential recruiters. We strive to bridge the gap between students and recruiters, making the job search process more efficient and effective.",
          picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPqXokJh37SKSHIWAtYo9COBaO5uQ5xFkTg&s",
          float: "left"
        },
      ];

    return (
        <div className="about-container">
            <PageHeader text="Empowering Students"/>
            <spam>
                <AboutBanner commitmentHeading={commitmentHeading} commitmentInfo={commitmentInfo}/>
            </spam>
            <About4 />
            <p>Welcome to our website. We are dedicated to providing students with exclusive HR contacts to help them unlock a world of opportunities.</p>
        </div>
    );
}

export default About;
