import React from 'react'
import "../styles/About4.css"
import TextCardContainer from './TextCardContainer';

const About4 = () => {

  const headerData = [
    { main_heading: 'Our Approach To Success', sub_heading: 'We believe in a proactive approach that focuses on user empowerment and streamlined communication.' },
  ];

  const featuresData = [
    { heading: 'User-Centric', content: 'Our platform is designed with the user in mind, ensuring a seamless and user-friendly experience.' },
    { heading: 'Efficiency', content: 'We prioritize efficiency in connecting students with recruiters, making the process quick and effective.' },
    { heading: 'Innovation', content: 'We are constantly innovating to provide students with the latest tools and resources for successful job placements.' },
  ];

  return (
    <TextCardContainer headerData={headerData} featuresData={featuresData}/>
  );
};

export default About4;
