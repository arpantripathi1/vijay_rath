import React from 'react'
import "../styles/About4.css"
import TextCardContainer from './TextCardContainer';

const About4 = () => {

  const headerData = [
    { main_heading: 'Our Approach To Success', sub_heading: 'We believe in a proactive approach that focuses on user empowerment and streamlined communication.' },
  ];

  const featuresData = [
    { heading: 'Appropriate Connections', content: "If company hires,all you need is Hr / recruiter / project manager to get a job.You can connect to them in Linkedin but chances of getting reply and scheduling interviews are too low.Your seach is over with us" },
    { heading: 'Active Contacts', content: 'To get hired,you need to get lots of interviews,that will only scheduled by HR / recruiters,we provide contact of that Hr / recruiter, who hired recently.' },
    { heading: 'Smart work', content: 'There is a difference between a knowledgable candidate and the person who actually gets job.Not necessary but a Reality,we provide that smartness in our video' },
  ];

  return (
    <TextCardContainer headerData={headerData} featuresData={featuresData}/>
  );
};

export default About4;
