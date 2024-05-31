// src/Home.js
import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import HomeServices from '../components/HomeServices';
import Challenges from '../components/Challenges';
import EmpoweringSuccess from '../components/EmpoweringSuccess';
import TextCardContainer from '../components/TextCardContainer';
import FAQ from '../components/FAQ';

const Home = ({setIsHomePage}) => {

    useEffect(() => {
        setIsHomePage(true);
        return () => setIsHomePage(false); // Reset when component unmounts
    }, [setIsHomePage]);

    const FaqData = [
            {
              "question": "What is Vijay Rath?",
              "answer": "Vijay Rath is your one-stop platform for connecting with recruiters! We provide access to a curated list of HR emails and phone numbers, along with tools to automate your job search."
            },
            {
              "question": "Is this service only for students?",
              "answer": "While Vijay Rath is particularly helpful for students starting their careers, anyone seeking new job opportunities can benefit from our platform."
            },
            {
              "question": "How much does it cost to use Vijay Rath?",
              "answer": "We offer different subscription plans to fit your needs. Check our pricing page for details!"
            },
            {
              "question": "How often are the HR emails and phone numbers updated?",
              "answer": "Our data refresh functionality ensures you have access to fresh contacts with a click of a button."
            },
            {
              "question": "Is my information secure on Vijay Rath?",
              "answer": "Absolutely! We prioritize user security with secure logins and encrypted data storage."
            },
            {
              "question": "Can someone copy the recruiter contact information?",
              "answer": "Our confidential page prevents screenshots and recordings, ensuring the data stays accessible only to registered users."
            },
            {
              "question": "How can I personalize my job search with Vijay Rath?",
              "answer": "Upload your resume, email templates, and manage contact information – all within the platform!"
            },
            {
              "question": "Will Vijay Rath send emails on my behalf? (For future implementation)",
              "answer": "Our automated resume distribution feature (coming soon!) allows you to send your resume to multiple recruiters with ease."
            },
            {
              "question": "What kind of interview tips and resources do you offer?",
              "answer": "We provide valuable resources like interview question guides, call scripts, and even 'insider secrets' to help you ace your interviews!"
            },
            {
              "question": "Isn't it unethical to use 'cheating tips' for interviews?",
              "answer": "Our focus is on providing interview preparation resources and industry insights – not promoting unethical practices. We believe confidence and strong preparation are key to success."
            },
                    
    ];

    const headerData = [
        { main_heading: 'Unlock Your Career Potential', sub_heading: 'Experience the advantages of utilizing Vijay Rath for your job search' },
      ];
    
      const featuresData = [
        { heading: 'Direct Connections', content: 'Get direct access to the professional emails and contact numbers of HR representatives in various industries' },
        { heading: 'Effortless Networking', content: 'Connect with recruiters seamlessly by enhancing your job application process with accurate and up-to-date information' },
        { heading: 'Time Optimization', content: 'Save time and energy by easily refreshing your contact list with the click of a button, ensuring efficient job search' },
      ];
      
    return (
        <>
            <HeroSection />
            <Challenges />
            <HomeServices />
            <EmpoweringSuccess />
            <FAQ data={FaqData}/>

            <TextCardContainer headerData={headerData} featuresData={featuresData}/>          
        </>
    );
}

export default Home;
