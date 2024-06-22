import React from 'react';
import "../styles/HomeServices.css";

const services = [
  {
    title: 'Thousands Of Active Recruiters',
    description: 'Gain access to an extensive database of active HR emails and contact numbers from diverse industries to jumpstart your career.',
    image: '/images/active-hr.jpeg',
  },
  {
    title: 'Updated Information',
    description: 'set of 6 videos tell you the winners fixed-approach and unbelieveble tricks,that few are aware about.This will increase your chances by 70% to get interviews and clearing rounds',
    image: '/images/updated-info.jpeg',
  },
  {
    title: 'Efficient Search Process',
    description: 'Save time with our curated list of genuine recruiter contacts, eliminating the frustration of sifting through fake or outdated information.',
    image: '/images/efficient-search.jpeg',
  },
  {
    title: 'Increased Opportunities',
    description: 'Unlock a wealth of interview opportunities with direct access to recruiters, enhancing your chances of securing job offers and avoiding career stagnation.',
    image: '/images/increased-opportunity.jpeg',
  },
  {
    title: 'Effective Enquiry',
    description: 'Utilize our call scripts and communication strategies to effectively engage with recruiters, making a strong impression and inquiring about job availability the right way.',
    image: '/images/call-script.jpeg',
  },
  {
    title: 'Smart Job Search Tactics',
    description: 'Equip yourself with essential skills and clever tactics, including hidden support during interviews, to navigate the competitive job market and land your desired job.',
    image: '/images/job-tactics.jpeg',
  },
];


function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <img src={service.image} alt="img" />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </div>
  );
}

function HomeServices() {
  return (
    <div className="hs_container">
      <div className="hs_sub_container">
        <h1>Solutions for Students' Hindrances</h1>
        <p>
          Explore our range of services tailored to address the challenges faced by
          students when it comes to job applications
        </p>
        <div className="services">
          {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div >
  );
}

export default HomeServices;
