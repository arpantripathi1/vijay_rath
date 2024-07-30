import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../styles/PaymentForm.css';
// import { AuthContext } from '../context/AuthContext';

const loadRazorpayScript = () => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

const PaymentForm = () => {
    const location = useLocation();
    const { selectedPlan } = location.state;
    const [discount, setDiscount] = useState(0);
    const [razorpayKey, setRazorpayKey] = useState('');
    const [coupon, setCoupon] = useState('');
    // const {isAuthenticated} = useContext(AuthContext);

    useEffect(() => {
        const fetchRazorpayKey = async () => {
            try {
                const { data } = await axios.get('http://localhost:8080/config/razorpay');
                console.log("Razorpay Key Response:", data); // Debugging line
                setRazorpayKey(data.key);
            } catch (error) {
                console.error('Error fetching Razorpay key:', error);
            }
        };

            fetchRazorpayKey();
    }, []);

    const formik = useFormik({
        initialValues: {
            name: '',
            role: '',
            collegeName: '',
            collegeCity: '',
            collegeState: '',
            email: '',
            phone: '',
            amount: selectedPlan.price
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            role: Yup.string().required('Required'),
            collegeName: Yup.string().when('role', {
                is: 'student',
                then: Yup.string().required('Required')
            }),
            collegeCity: Yup.string().when('role', {
                is: 'student',
                then: Yup.string().required('Required')
            }),
            collegeState: Yup.string().when('role', {
                is: 'student',
                then: Yup.string().required('Required')
            }),
            email: Yup.string().email('Invalid email address').required('Required'),
            phone: Yup.string().optional(),
            amount: Yup.number().required('Required').positive('Must be a positive number').integer('Must be an integer')
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            const orderData = {
                plan: selectedPlan.title,
                amount: (values.amount - discount) * 100, // Razorpay expects amount in paise
                currency: 'INR',
                receipt: `receipt#${Math.random()}`,
                customer: {
                    name: values.name,
                    role: values.role,
                    collegeName: values.role === 'student' ? values.collegeName : '',
                    collegeCity: values.role === 'student' ? values.collegeCity : '',
                    collegeState: values.role === 'student' ? values.collegeState : '',
                    email: values.email,
                    phone: values.phone
                }
            };

            try {
                console.log("/orders/order is hitted successfully");
                const response = await axios.post('http://localhost:8080/orders/order', orderData, {
                    headers: { 'Content-Type': 'application/json' }
                });
                const order = response.data;
                console.log("razorpay order is created :",order);

                const isRazorpayLoaded = await loadRazorpayScript();
                if (!isRazorpayLoaded) {
                    alert('Razorpay SDK failed to load. Are you online?');
                    return;
                }

                const options = {
                    key: razorpayKey,
                    amount: order.amount,
                    currency: order.currency,
                    name: 'Vijay-Rath',
                    description: 'Test Transaction',
                    image: 'https://your-logo-url.com', // Replace with your logo URL
                    order_id: order.id,
                    handler: function (response) {
                        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                    },
                    prefill: {
                        name: values.name,
                        email: values.email,
                        contact: values.phone
                    },
                    notes: {
                        address: 'Razorpay Corporate Office'
                    },
                    theme: {
                        color: '#3399cc'
                    }
                };

                const paymentObject = new window.Razorpay(options);
                paymentObject.open();
            } catch (error) {
                console.error('Error creating order:', error);
            }

            setSubmitting(false);
            resetForm();
        }
    });

    const handleApplyCoupon = () => {
        const validCoupons = {
            'SAVE10': 100,
            'SAVE20': 200
        };

        if (validCoupons[coupon]) {
            setDiscount(validCoupons[coupon]);
            alert(`Coupon applied! You have saved ₹${validCoupons[coupon]}`);
        } else {
            alert('Invalid coupon code');
        }
    };

    return (
        <div className="payment-form-container">
            <div className="plan-box">
                <h2>Plan Details</h2>
                <div className="plan-details">
                    <h3>{selectedPlan.title}</h3>
                    <p className="plan-price">₹{selectedPlan.price}</p>
                    <p className="plan-duration">{selectedPlan.duration}</p>
                    <p className="plan-description">{selectedPlan.description}</p>
                    <ul className="plan-features">
                        {selectedPlan.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit} className="payment-form">
                <h2>User Information</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="student"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.role === 'student'}
                            />
                            Student
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="fresher"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.role === 'fresher'}
                            />
                            Fresher
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="experienced"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                checked={formik.values.role === 'experienced'}
                            />
                            Experienced Professional
                        </label>
                    </div>
                    {formik.touched.role && formik.errors.role ? (
                        <div className="error">{formik.errors.role}</div>
                    ) : null}
                </div>
                {formik.values.role === 'student' && (
                    <>
                        <div className="form-group">
                            <label htmlFor="collegeName">College Name:</label>
                            <input
                                id="collegeName"
                                name="collegeName"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.collegeName}
                            />
                            {formik.touched.collegeName && formik.errors.collegeName ? (
                                <div className="error">{formik.errors.collegeName}</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="collegeCity">College City:</label>
                            <input
                                id="collegeCity"
                                name="collegeCity"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.collegeCity}
                            />
                            {formik.touched.collegeCity && formik.errors.collegeCity ? (
                                <div className="error">{formik.errors.collegeCity}</div>
                            ) : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="collegeState">College State:</label>
                            <input
                                id="collegeState"
                                name="collegeState"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.collegeState}
                            />
                            {formik.touched.collegeState && formik.errors.collegeState ? (
                                <div className="error">{formik.errors.collegeState}</div>
                            ) : null}
                        </div>
                    </>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                    />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className="error">{formik.errors.phone}</div>
                    ) : null}
                </div>
                <div className="form-group coupon-container">
                    <label htmlFor="coupon">Coupon:</label>
                    <div className='coupon-input-container'>
                        <input
                            id="coupon"
                            name="coupon"
                            type="text"
                            onChange={(e) => setCoupon(e.target.value)}
                            onBlur={formik.handleBlur}
                            value={coupon}
                            className="coupon-input"
                        />
                        <button type="button" onClick={handleApplyCoupon} className="apply-button">Apply</button>
                    </div>
                </div>
                <button type="submit" className="submit-button">Pay ₹{formik.values.amount - discount}</button>
            </form>
        </div>
    );
};

export default PaymentForm;





// import React from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import '../styles/PaymentForm.css';

// const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//         const script = document.createElement('script');
//         script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//         script.onload = () => resolve(true);
//         script.onerror = () => resolve(false);
//         document.body.appendChild(script);
//     });
// };

// const PaymentForm = () => {
//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             role: '',
//             collegeName: '',
//             collegeCity: '',
//             email: '',
//             phone: '',
//             amount: ''
//         },
//         validationSchema: Yup.object({
//             name: Yup.string().required('Required'),
//             role: Yup.string().required('Required'),
//             collegeName: Yup.string().when('role', {
//                 is: 'student',
//                 then: Yup.string().required('Required')
//             }),
//             collegeCity: Yup.string().when('role', {
//                 is: 'student',
//                 then: Yup.string().required('Required')
//             }),
//             email: Yup.string().email('Invalid email address').required('Required'),
//             phone: Yup.string().required('Required'),
//             amount: Yup.number().required('Required').positive('Must be a positive number').integer('Must be an integer')
//         }),
//         onSubmit: async (values, { setSubmitting, resetForm }) => {
//             const orderData = {
//                 amount: values.amount * 100, // Razorpay expects amount in paise
//                 currency: 'INR',
//                 receipt: `receipt#${Math.random()}`,
//                 customer: {
//                     name: values.name,
//                     role: values.role,
//                     collegeName: values.role === 'student' ? values.collegeName : '',
//                     collegeCity: values.role === 'student' ? values.collegeCity : '',
//                     email: values.email,
//                     phone: values.phone
//                 }
//             };

//             try {
//                 const response = await fetch('/orders/order', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify(orderData)
//                 });
//                 const order = await response.json();
//                 console.log('Order created:', order);

//                 const isRazorpayLoaded = await loadRazorpayScript();
//                 if (!isRazorpayLoaded) {
//                     alert('Razorpay SDK failed to load. Are you online?');
//                     return;
//                 }

//                 const options = {
//                     key: process.env.RAZORPAY_KEY_ID, // Replace with your Razorpay key ID
//                     amount: order.amount,
//                     currency: order.currency,
//                     name: 'Your Company Name',
//                     description: 'Test Transaction',
//                     image: 'https://your-logo-url.com', // Replace with your logo URL
//                     order_id: order.id,
//                     handler: function (response) {
//                         alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
//                     },
//                     prefill: {
//                         name: values.name,
//                         email: values.email,
//                         contact: values.phone
//                     },
//                     notes: {
//                         address: 'Razorpay Corporate Office'
//                     },
//                     theme: {
//                         color: '#3399cc'
//                     }
//                 };

//                 const paymentObject = new window.Razorpay(options);
//                 paymentObject.open();
//             } catch (error) {
//                 console.error('Error creating order:', error);
//             }

//             setSubmitting(false);
//             resetForm();
//         }
//     });

//     return (
//         <form onSubmit={formik.handleSubmit} className="payment-form">
//             <div className="form-group">
//                 <label htmlFor="name">Name:</label>
//                 <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.name}
//                 />
//                 {formik.touched.name && formik.errors.name ? (
//                     <div className="error">{formik.errors.name}</div>
//                 ) : null}
//             </div>
//             <div className="form-group">
//                 <label>Role:</label>
//                 <div className="radio-group">
//                     <label>
//                         <input
//                             type="radio"
//                             name="role"
//                             value="student"
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             checked={formik.values.role === 'student'}
//                         />
//                         Student
//                     </label>
//                     <label>
//                         <input
//                             type="radio"
//                             name="role"
//                             value="fresher"
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             checked={formik.values.role === 'fresher'}
//                         />
//                         Job Seeker
//                     </label>
//                     <label>
//                         <input
//                             type="radio"
//                             name="role"
//                             value="experienced"
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             checked={formik.values.role === 'experienced'}
//                         />
//                         Experienced Professional
//                     </label>
//                 </div>
//                 {formik.touched.role && formik.errors.role ? (
//                     <div className="error">{formik.errors.role}</div>
//                 ) : null}
//             </div>
//             {formik.values.role === 'student' && (
//                 <>
//                     <div className="form-group">
//                         <label htmlFor="collegeName">College Name:</label>
//                         <input
//                             id="collegeName"
//                             name="collegeName"
//                             type="text"
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.collegeName}
//                         />
//                         {formik.touched.collegeName && formik.errors.collegeName ? (
//                             <div className="error">{formik.errors.collegeName}</div>
//                         ) : null}
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="collegeCity">College City:</label>
//                         <input
//                             id="collegeCity"
//                             name="collegeCity"
//                             type="text"
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             value={formik.values.collegeCity}
//                         />
//                         {formik.touched.collegeCity && formik.errors.collegeCity ? (
//                             <div className="error">{formik.errors.collegeCity}</div>
//                         ) : null}
//                     </div>
//                 </>
//             )}
//             <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.email}
//                 />
//                 {formik.touched.email && formik.errors.email ? (
//                     <div className="error">{formik.errors.email}</div>
//                 ) : null}
//             </div>
//             <div className="form-group">
//                 <label htmlFor="phone">Phone:</label>
//                 <input
//                     id="phone"
//                     name="phone"
//                     type="text"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.phone}
//                 />
//                 {formik.touched.phone && formik.errors.phone ? (
//                     <div className="error">{formik.errors.phone}</div>
//                 ) : null}
//             </div>
//             <div className="form-group">
//                 <label htmlFor="amount">Amount:</label>
//                 <input
//                     id="amount"
//                     name="amount"
//                     type="number"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.amount}
//                 />
//                 {formik.touched.amount && formik.errors.amount ? (
//                     <div className="error">{formik.errors.amount}</div>
//                 ) : null}
//             </div>
//             <button type="submit" disabled={formik.isSubmitting} className="submit-button">
//                 Pay Now
//             </button>
//         </form>
//     );
// };

// export default PaymentForm;
