import React from 'react';
import "../styles/HomeServices.css";

const services = [
  {
    title: 'HR Contacts',
    description: 'Access curated HR emails and numbers.',
    image:'https://cdn.wallpapersafari.com/56/59/8YjOLA.png',
  },
  {
    title: 'Automated Distribution',
    description: 'Upload email ID, resume, and templates for automated distribution.',
    image:'https://cdn.wallpapersafari.com/56/59/8YjOLA.png',
  },
  {
    title: 'Secure Connectivity',
    description: 'Enjoy secure login, seamless payment integration, and a confidential message viewing page.',
    image:'https://cdn.wallpapersafari.com/56/59/8YjOLA.png',
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
