import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AboutCard.css';  // Importing the CSS file

const AboutCard = ({ heading,imageUrl, text, floatSide }) => {
  return (
    <div className={`image-text-container ${floatSide}`}>
      <div className="image">
        <img src={imageUrl} alt="Content" />
      </div>
      <div className="text">
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

export default AboutCard;
