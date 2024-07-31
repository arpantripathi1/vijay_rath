import React, { useEffect, useState } from 'react';
import PlanCard from './PlanCard';
import plansData from '../plans.json';
import "../styles/PlanCardContainer.css"
const PlanCardContainer = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    setPlans(plansData);
  }, []);

  return (
    <div className="plan-card-container">
      <p className="title">Pick Your Perfect Plan</p>
      <p className="subtitle">
        Get started in complete confidence. This could give you a lot of interview opportunities!
      </p>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} isRecommended={index === 1} />
        ))}
      </div>
    </div>
  );
};

export default PlanCardContainer;
