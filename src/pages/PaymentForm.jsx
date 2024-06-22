// import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { useLocation } from 'react-router-dom';
// import PaymentFormContent from '../components/PaymentFormContent'; // Import the new PaymentFormContent component
// import '../styles/PaymentForm.css';

// const stripePromise = loadStripe('pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3');

// const PaymentForm = () => {
//   const location = useLocation();
//   const { selectedPlan } = location.state || {};
//   const [clientSecret, setClientSecret] = useState('');
//   const [states, setStates] = useState([]); // Define states array
//   const [cities, setCities] = useState([]); // Define cities array

//   useEffect(() => {
//     if (selectedPlan) {
//       fetch('http://localhost:3001/create-payment-intent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           amount: selectedPlan.price * 100,
//           currency: 'inr',
//         }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           setClientSecret(data.clientSecret);
//         })
//         .catch((error) => console.error('Error fetching client secret:', error));
//     }
//   }, [selectedPlan]);

//   useEffect(() => {
//     fetch(`https://api.countrystatecity.in/v1/countries/IN/states`, {
//       headers: { 'X-CSCAPI-KEY': 'SXl4Z3A1MVJlajNlVDNOTGU0U2liTFlVUTFXcXF6Zkg4aHFYbm5SMQ==' },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setStates(data.map((state) => ({ value: state.iso2, label: state.name })));
//       })
//       .catch((error) => console.error('Error fetching states:', error));
//   }, []);

//   return (
//     <Elements stripe={stripePromise} options={{ clientSecret }}>
//       <PaymentFormContent 
//         selectedPlan={selectedPlan} 
//         states={states} // Pass states array as prop
//         cities={cities} // Pass cities array as prop
//       />
//     </Elements>
//   );
// };

// export default PaymentForm;
import React from 'react'

const PaymentForm = () => {
  return (
    <div>PaymentForm</div>
  )
}

export default PaymentForm