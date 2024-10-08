
import React from 'react';
// import PropTypes from 'prop-types';
import '../styles/ServiceCard.css';  // Importing the CSS file

const ServiceCard = ({sNo , heading,imageUrl, text, floatSide }) => {
  return (
    <div className={`image-text-container ${floatSide}`}>
      <div className="image">
        <img src={imageUrl} alt="Content" />
      </div>
      <div className="text">
        <p style={{color: "red"}}>{sNo}</p>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

// ImageTextComponent.propTypes = {
//   imageUrl: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   floatSide: PropTypes.oneOf(['left', 'right']).isRequired,
// };

export default ServiceCard;
