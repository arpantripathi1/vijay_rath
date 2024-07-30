import React, { useContext, useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/PlanCard.css';
import { AuthContext } from '../context/AuthContext';

const PlanCard = ({ plan, isRecommended }) => {
  const navigate = useNavigate();
  const {isAuthenticated} = useContext(AuthContext);


  // const handleBuyNowClick = () => {
  //   isAuthenticated ? navigate('/payment', { state: { selectedPlan: plan } }) :
  //    navigate("/login");

  // };

  const handleBuyNowClick = () => {
    if (isAuthenticated) {
      navigate('/payment', { state: { selectedPlan: plan } });
    } else {
      navigate("/login", { state: { redirectTo: '/payment', selectedPlan: plan } });
    }
  };

  return (
    <div className={`plan-card ${isRecommended ? 'recommended' : ''}`}>
      {isRecommended && <div className="recommended-badge">Recommended</div>}
      <h2>{plan.title}</h2>
      <p className="plan-real-price">₹<span>{plan.real_price}</span></p>
      <p className="plan-price">₹{plan.price}</p>
      <p className="plan-duration">{plan.duration}</p>
      <p className="plan-description">{plan.description}</p>
      <ul className="plan-features">
        {plan.features.map((feature, index) => (
          <li key={index}>
            <FaCheckCircle className="icon-true" /> {feature}
          </li>
        ))}
      </ul>
      <ul className="plan-limits">
        {plan.limits.map((limit, index) => (
          <li key={index}>
            <FaTimesCircle className="icon-false" /> {limit}
          </li>
        ))}
      </ul>
      <button className="buy-button" onClick={handleBuyNowClick}>
        Buy Now
      </button>
    </div>
  );
};

export default PlanCard;
