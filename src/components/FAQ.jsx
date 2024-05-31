import React, { useState } from 'react';
import '../styles/FAQ.css'; // Import the CSS file

const FAQ = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {data.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="faq-question">
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
