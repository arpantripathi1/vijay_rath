import React from 'react'
import TextCard from './TextCard'
import "../styles/TextCardContainer.css";

const TextCardContainer = ({headerData , featuresData}) => {
  return (
    <div className="features_container">
      <div className="text_section">
        <h1>{headerData[0].main_heading}</h1>
        <p>{headerData[0].sub_heading} </p>
      </div>
      <div className='features'>
        {
            featuresData.map((feature, i) => (
             <TextCard key={i} heading={feature.heading} content={feature.content} />
            ))
        }
      </div>
    </div>
  )
}

export default TextCardContainer