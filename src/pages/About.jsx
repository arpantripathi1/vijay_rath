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
          sub_heading: "Vijay Rath is a revolutionary platform that provides Students with exclusive access to HR emails and contact details. Our interface offers a curated selection of 30 emails and 10 numbers, with the ability to refresh for new contacts effortlessly. Students can also upload their information for automated distribution and seamless communication with potential recruiters.",
        },
      ]
    
      const commitmentInfo = [
        {
          "content_heading": "Our Commitment",
          "content_body": "At Vijay Rath, our mission is to empower Students and Job Seeker Professtionals with a complete package by providing them contacts of real and active HRs and Recruiters,who can truly offer job opportunities, along with tools, knowledge, and resources needed to effortlessly update their information and connect with potential recruiters. We strive to bridge the gap between Job-Seekers and Recruiters, making the job search process more efficient and effective.",
          "picUrl": "/images/commitment.jpeg",
          "float": "left"
        },
        {
          "content_heading": "Core Values",
          "content_body": "Ask Right People Only: Reaching out to random professionals and fake HRs on Likedin won't land you a single interview.Right Tech Stack Only: The reality is, using the wrong or overly hyped tech stack can hinder your future.\nRight Sentences Only: Having average conversations with HRs can kill your interview opportunity.",
          "picUrl": "/images/core-values.jpeg",
          "float": "right"
        },
        {
          "content_heading": "Our Motto",
          "content_body": "Our goal is to ensure you are always ahead in your job search and career development. With Vijay Rath, your Journey must be lot easier and lands you lot more opportunities than any job seeker. We are committed to help you choosing the most right path and techstack, enhance your Knowledge and increase your chances of success in the competitive job market. This continuous learning and improvement approach ensures that you are not only prepared for today's opportunities but are also equipped to face future challenges with confidence.",
          "picUrl": "/images/motto.jpeg",
          "float": "left"
        },
      ];

    return (
        <div className="about-container">
            <PageHeader text="Empowering Students"/>
            <span>
                <AboutBanner commitmentHeading={commitmentHeading} commitmentInfo={commitmentInfo}/>
            </span>
            <About4 />
        </div>
    );
}

export default About;
