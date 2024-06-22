import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
// import ServiceCard from '../components/ServiceCard'
import TextCardContainer from '../components/TextCardContainer';
import ServiceBanner from '../components/ServiceBanner';
import PlanCardContainer from '../components/PlanCardContainer';
// import PlanCard from '../components/PlanCard';

const Services = ({ setIsHomePage }) => {

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
      "sno": "01",
      "content_heading": "Active Recruiters everyday",
      "content_body": "We provide job seekers with a daily supply of emails and contacts of active recruiters who have recently hired. This ensures that you are always reaching out to relevant and up-to-date opportunities, maximizing your chances of landing an interview.",
      "picUrl": "/images/active-recruiters.jpeg",
      "float": "left"
    },
    {
      "sno": "02",
      "content_heading": "Exclusive Knowledge , path , tactics , tricks & Guidance",
      "content_body": "Gain access to knowledge and guidance that will ensure you stand out among other candidates in this tough market. The insights provided will blow your mind and equip you to navigate your job search journey smartly and effectively.",
      "picUrl": "/images/tactics.jpeg",
      "float": "right"
    },
    {
      "sno": "03",
      "content_heading": "Effective Communication Resources",
      "content_body": "Access resources like call scripts and email templates designed to help you communicate effectively with HRs. These tools ensure you can inquire about vacancies and schedule interviews confidently. Words can work wonders when chosen wisely.",
      "picUrl": "/images/communication.jpeg",
      "float": "left"
    }
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
        <ServiceBanner commitmentHeading={commitmentHeading} commitmentInfo={commitmentInfo} />
        <PlanCardContainer />
       
        {/* <ServiceCard sNo="01" content="ghgu fgui bhl guogyuo ftovyuo fyurity ftcvuogyocrty gu vr7 ffyfui ftyidrty" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8hzfZr8tzZSeKdanXZCGPb0S284jLQimjQ&s" imageFloat="left"/> */}
        <TextCardContainer headerData={headerData} featuresData={featuresData} />

      </div>
    </div>
  )
}

export default Services;