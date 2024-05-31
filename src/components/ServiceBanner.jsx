import React from 'react';
import ServiceCard  from "./ServiceCard";
import '../styles/ServiceBanner.css'; // Import the CSS file



const ServiceBanner = ({sNo,commitmentHeading,commitmentInfo}) => {
  return (
    <div className="service-banner">
    <div className="banner-text">
      <h1>{commitmentHeading.main_heading}</h1>
      <p>{commitmentHeading.sub_heading}</p>
    </div>

    {
      commitmentInfo.map((item, i) => (
        <ServiceCard  key={i} sNo={item.sno} floatSide={item.float} imageUrl={item.picUrl} heading={item.content_heading} text={item.content_body} />
      ))
    }

  </div>
  )
}

export default ServiceBanner