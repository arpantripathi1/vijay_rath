import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
// import ServiceCard from '../components/ServiceCard'
import TextCardContainer from '../components/TextCardContainer';
import ServiceBanner from '../components/ServiceBanner';

const Services = ({setIsHomePage}) => {

  useEffect(() => {
    setIsHomePage(false);
    return () => setIsHomePage(true); // Reset when component unmounts
  }, [setIsHomePage]);

  // data for banner cards
  const commitmentHeading = [
    {
      main_heading: "Empowering Connections, Enabling Success",
      sub_heading: "Vijay Rath is a revolutionary platform that provides students with exclusive access to HR emails and contact details. Our interface offers a curated selection of 30 emails and 10 numbers, with the ability to refresh for new contacts effortlessly. Students can also upload their information for automated distribution and seamless communication with potential recruiters.",
    },
  ]

  const commitmentInfo = [
    {
      sno: "01",
      content_heading: "our commitment",
      content_body: "At Vijay Rath, our mission is to empower students by providing them with the tools and resources needed to effortlessly update their information and connect with potential recruiters. We strive to bridge the gap between students and recruiters, making the job search process more efficient and effective.",
      picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPqXokJh37SKSHIWAtYo9COBaO5uQ5xFkTg&s",
      float: "left"
    },
    {
      sno: "02",
      content_heading: "Core Values",
      content_body: "Innovation: Constantly evolving to meet the needs of students and recruiters.\n Transparency: Ensuring a clear and honest communication process for all users.\nEmpowerment: Enabling students to take control of their job search journey.",
      picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPqXokJh37SKSHIWAtYo9COBaO5uQ5xFkTg&s",
      float: "right"
    },
    {
      sno: "03",
      content_heading: "our commitment",
      content_body: "At Vijay Rath, our mission is to empower students by providing them with the tools and resources needed to effortlessly update their information and connect with potential recruiters. We strive to bridge the gap between students and recruiters, making the job search process more efficient and effective.",
      picUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPqXokJh37SKSHIWAtYo9COBaO5uQ5xFkTg&s",
      float: "left"
    },
  ];


  // data for text card
  const headerData = [
    { main_heading: 'Unlock Your Career Potential', sub_heading: 'Experience the advantages of utilizing Vijay Rath for your job search' },
  ];

  const featuresData = [
    { heading: 'Direct Connections', content: 'Get direct access to the professional emails and contact numbers of HR representatives in various industries' },
    { heading: 'Effortless Networking', content: 'Connect with recruiters seamlessly by enhancing your job application process with accurate and up-to-date information' },
    { heading: 'Time Optimization', content: 'Save time and energy by easily refreshing your contact list with the click of a button, ensuring efficient job search' },
  ];

  return (
    <div>
        <PageHeader text="Exclusive Student Excess" />
        <div>
          <ServiceBanner commitmentHeading={commitmentHeading} commitmentInfo={commitmentInfo}/>
           {/* <ServiceCard sNo="01" content="ghgu fgui bhl guogyuo ftovyuo fyurity ftcvuogyocrty gu vr7 ffyfui ftyidrty" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8hzfZr8tzZSeKdanXZCGPb0S284jLQimjQ&s" imageFloat="left"/> */}
          <TextCardContainer headerData={headerData} featuresData={featuresData}/>

        </div>
    </div>
  )
}

export default Services ;