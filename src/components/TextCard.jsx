import React from 'react';
import "../styles/TextCard.css";

const TextCard = ({ heading, content }) => {
  return (
    <div className="text_card card">
      <div style={{border: "2px solid darkblue" ,width: "100px" , marginTop:"5px"}}></div>
      <h3>{heading}</h3>
      <p>{content}</p>
    </div>
  );
};

export default TextCard;