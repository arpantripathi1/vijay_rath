import React from 'react';
import '../styles/AboutBanner.css'; // Import the CSS file
import AboutCard from './AboutCard';

function AboutBanner({commitmentHeading,commitmentInfo}) {

  return (
    <div className="about-banner">
      <div className="banner-text">
        <h1>{commitmentHeading.main_heading}</h1>
        <p>{commitmentHeading.sub_heading}</p>      
      </div>

      {
        commitmentInfo.map((item, i) =>(
          <AboutCard key={i} floatSide={item.float} imageUrl={item.picUrl} heading={item.content_heading} text={item.content_body} />
        ))
      }

    </div>
  );
}

export default AboutBanner;
