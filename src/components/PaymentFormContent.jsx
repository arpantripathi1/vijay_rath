// import React, { useState } from 'react';
// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
// import Select from 'react-select';
// import '../styles/PaymentFormContent.css';

// const PaymentFormContent = ({ selectedPlan, states,cities }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     state: '',
//     city: '',
//     jobStatus: '',
//     collegeName: '',
//     couponCode: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleStateChange = (selectedOption) => {
//     setFormData({ ...formData, state: selectedOption.value });
//   };

//   const handleCityChange = (selectedOption) => {
//     setFormData({ ...formData, city: selectedOption.value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) return;

//     // Add your form submission logic here
//     const result = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement('card'),
//         billing_details: {
//           name: formData.name,
//         },
//       },
//     });

//     if (result.error) {
//       console.error('Payment failed:', result.error.message);
//       // Handle payment failure
//       setPaymentError(result.error.message);
//     } else {
//       if (result.paymentIntent.status === 'succeeded') {
//         setPaymentSuccess(true);
//       }
//     }
//   };

//   return (
//     <div className="payment-form-container">
//       <h2 className="payment-form-heading">Payment Details</h2>
//       {selectedPlan && <p className="plan-price">₹{selectedPlan.price}</p>}
//       {selectedPlan && <p className="plan-description">{selectedPlan.description}</p>}
//       <form onSubmit={handleSubmit} className="payment-form">
//         <div className="form-group">
//           <label htmlFor="name" className="form-label">Name:</label>
//           <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email" className="form-label">Email:</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="state" className="form-label">State:</label>
//           {/* Assuming states is an array of options */}
//           <Select id="state" name="state" options={states} onChange={handleStateChange} className="form-control" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="city" className="form-label">City:</label>
//           {/* Assuming cities is an array of options */}
//           <Select id="city" name="city" options={cities} onChange={handleCityChange} className="form-control" />
//         </div>
//         <div className="form-group">
//           <label className="form-label">Payment Method:</label>
//           <PaymentElement />
//         </div>
//         <button type="submit" className="submit-btn">Pay ₹{selectedPlan?.price}</button>
//       </form>
//     </div>
//   );
// };

// export default PaymentFormContent;

import React from 'react'

const PaymentFormContent = () => {
  return (
    <div>PaymentFormContent</div>
  )
}

export default PaymentFormContent
