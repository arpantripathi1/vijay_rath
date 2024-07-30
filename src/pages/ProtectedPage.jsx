
// import React, { useEffect, useState } from 'react';
// import MailCardContainer from '../components/MailCardContainer';
// import PageHeader from '../components/PageHeader';
// import "../styles/SecretPage.css";
// import ToggleButton from '../components/ToggleButton';
// import ContactCardContainer from '../components/ContactCardContainer';
// import Swal from 'sweetalert2';
// import {jwtDecode} from 'jwt-decode';
// import axios from 'axios';

// const ProtectedPage = ({ setIsHomePage, userPurchaseDate }) => {
//     const [isToggled, setIsToggled] = useState(false);
//     const [contactMails, setContactMails] = useState([]);
//     const [contactNumbers, setContactNumbers] = useState([]);
//     const [userId, setUserId] = useState(null);
//     const [isUserIdSet, setIsUserIdSet] = useState(false);

//     //fetching user id from token
//     useEffect(() => {
//         const token = localStorage.getItem('auth_token'); // or wherever you store your token
//         console.log("token would be ",token);
//         if (token) {
//             try {
//                 const decodedToken = jwtDecode(token);
//                 console.log("token would be ",token);
//                 console.log("user id from token is ",decodedToken.id);
//                 setUserId(decodedToken.id);
//                 setIsUserIdSet(true);
//             } catch (error) {
//                 console.error("Error decoding token:", error);
//             }
//         }
//     }, []);

//     //getting contacts data first time
//     useEffect(() => {
//         const dataFetchedFlag = `dataFetched_${userId}`;
//         const isDataFetched = localStorage.getItem(dataFetchedFlag);

//         if (isUserIdSet && !isDataFetched) { // Run only if userId is set and data has not been fetched yet
//             handleConfirm();
//             localStorage.setItem(dataFetchedFlag, 'true'); // Mark data as fetched for this user
//         }
//     }, [isUserIdSet, userId]); // Dependency array includes isUserIdSet and userId




//     useEffect(() => {
//         setIsHomePage(false);
//         return () => setIsHomePage(true); // Reset when component unmounts
//     }, [setIsHomePage]);

//     const isWeekendInIndia = () => {
//         const indiaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
//         const indiaDate = new Date(indiaTime);
//         const day = indiaDate.getDay();
//         return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
//     };

//     const isServiceExpired = (purchaseDate) => {
//         const currentDate = new Date();
//         const purchaseDateObj = new Date(purchaseDate);
//         const threeMonthsLater = new Date(purchaseDateObj.setMonth(purchaseDateObj.getMonth() + 3));
//         return currentDate > threeMonthsLater;
//     };

//     const clickHandler = () => {
//         if (isWeekendInIndia()) {
//             Swal.fire({
//                 title: 'Oops!',
//                 text: "We can't update contacts on Saturdays and Sundays.",
//                 icon: 'warning',
//                 confirmButtonText: 'OK'
//             });
//             return;
//         }

//         if (isServiceExpired(userPurchaseDate)) {
//             Swal.fire({
//                 title: 'Expired!',
//                 text: "Contacts updation validity is expired as it was for 73 updations.",
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//             return;
//         }

//         Swal.fire({
//             title: 'Are you sure?',
//             text: "Do you want to update the contacts?",
//             icon: 'question',
//             html: '<p style="color: red;">Please use all current mails and contacts both, as if you update it once, you can\'t get current emails and contacts again.</p>',
//             showCancelButton: true,
//             confirmButtonText: 'Yes',
//             cancelButtonText: 'No'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 handleConfirm();
//             }
//         });
//     };

//     const handleConfirm = async () => {
//         console.log("user id is ",userId)
//         if (!userId) {
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'User ID is missing.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//             return;
//         }

//         try {
//             // Fetch new set of contacts here
//             const response = await axios.get('http://localhost:8080/contacts/data', {
//                 headers: {
//                     'User-Id': userId,
//                 },
//             });


//             const data = response.data;
//             console.log('Contacts fetched are:', data);
//             console.log('response data mails fetched are:', data.emails);
//             console.log('response data contacts fetched are:', data.contacts);

//             setContactMails(data.emails);
//             setContactNumbers(data.contacts);


//             Swal.fire({
//                 title: 'Success!',
//                 text: 'Contacts have been updated successfully.',
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             });
//         } catch (error) {
//             console.error('Error fetching new contacts:', error);

//             Swal.fire({
//                 title: "Can't fetch today!",
//                 text: 'It could be because u have already fetched 10 emails & 10 contacts for today quota ',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         }
//     };

//     return (
//         <div className="secret-page">
//             <PageHeader text="Today's Contacts" />
//             <ToggleButton leftOption="E-mails" rightOption="Contacts" setIsToggled={setIsToggled} isToggled={isToggled} />
//             {isToggled ? <ContactCardContainer contactNumbers={contactNumbers} /> : <MailCardContainer emails={contactMails} />}
//             <button onClick={clickHandler} className="next-contacts-button">Update Contacts</button>
//         </div>
//     );
// };

// export default ProtectedPage;








// import React, { useEffect, useState } from 'react';
// import MailCardContainer from '../components/MailCardContainer';
// import PageHeader from '../components/PageHeader';
// import "../styles/SecretPage.css";
// import ToggleButton from '../components/ToggleButton';
// import ContactCardContainer from '../components/ContactCardContainer';
// import Swal from 'sweetalert2';
// import { jwtDecode } from 'jwt-decode';
// import axios from 'axios';

// const ProtectedPage = ({ setIsHomePage, userPurchaseDate }) => {
//     const [isToggled, setIsToggled] = useState(false);
//     const [contactMails, setContactMails] = useState([]);
//     const [contactNumbers, setContactNumbers] = useState([]);
//     const [userId, setUserId] = useState(null);

//     // Fetching user ID from token
//     useEffect(() => {
//         const token = localStorage.getItem('auth_token'); // or wherever you store your token
//         if (token) {
//             const decodedToken = jwtDecode(token);
//             setUserId(decodedToken.id);
//         }
//     }, []);

//     useEffect(() => {
//         setIsHomePage(false);
//         return () => setIsHomePage(true); // Reset when component unmounts
//     }, [setIsHomePage]);

//     const isWeekendInIndia = () => {
//         const indiaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
//         const indiaDate = new Date(indiaTime);
//         const day = indiaDate.getDay();
//         return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
//     };

//     const isServiceExpired = (purchaseDate) => {
//         const currentDate = new Date();
//         const purchaseDateObj = new Date(purchaseDate);
//         const threeMonthsLater = new Date(purchaseDateObj.setMonth(purchaseDateObj.getMonth() + 3));
//         return currentDate > threeMonthsLater;
//     };

//     const clickHandler = () => {
//         if (isWeekendInIndia()) {
//             Swal.fire({
//                 title: 'Oops!',
//                 text: "We can't update contacts on Saturdays and Sundays.",
//                 icon: 'warning',
//                 confirmButtonText: 'OK'
//             });
//             return;
//         }

//         if (isServiceExpired(userPurchaseDate)) {
//             Swal.fire({
//                 title: 'Expired!',
//                 text: "Contacts updation validity is expired as it was for 3 months.",
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//             return;
//         }

//         Swal.fire({
//             title: 'Are you sure?',
//             text: "Do you want to update the contacts?",
//             icon: 'question',
//             html: '<p style="color: red;">Please use all current mails and contacts both, as if you update it once, you can\'t get current emails and contacts again.</p>',
//             showCancelButton: true,
//             confirmButtonText: 'Yes',
//             cancelButtonText: 'No'
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 handleConfirm();
//             }
//         });

//     };

//     const handleConfirm = async () => {
//         try {
//             // Fetch new set of contacts here
//             const response = await axios.get('http://localhost:8080/contacts/data', {
//                 headers: {
//                     'User-Id': userId,
//                 },
//             });

//             const data = response.data;
//             console.log('Response data:', data); // Add this line
//             setContactMails(data.emails);
//             setContactNumbers(data.contacts);
//             console.log('Contacts fetched are:', data); // Add this line

//             Swal.fire({
//                 title: 'Success!',
//                 text: 'Contacts have been updated successfully.',
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             });
//         } catch (error) {
//             console.error('Error fetching new contacts:', error);

//             Swal.fire({
//                 title: "Can't fetch today!",
//                 text: 'It could be because u have already fetched 10 emails & 10 contacts for today quota ',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         }
//     };

//     return (
//         <div className="secret-page">
//             <PageHeader text="Today's Contacts" />
//             <ToggleButton leftOption="E-mails" rightOption="Contacts" setIsToggled={setIsToggled} isToggled={isToggled} />
//             {isToggled ? <ContactCardContainer contactNumbers={contactNumbers} /> : <MailCardContainer emails={contactMails} />}
//             <button onClick={clickHandler} className="next-contacts-button">Update Contacts</button>
//         </div>
//     );
// };

// export default ProtectedPage;




import React, { useEffect, useState } from 'react';
import MailCardContainer from '../components/MailCardContainer';
import PageHeader from '../components/PageHeader';
import "../styles/SecretPage.css";
import ToggleButton from '../components/ToggleButton';
import ContactCardContainer from '../components/ContactCardContainer';
import Swal from 'sweetalert2';
import {jwtDecode} from 'jwt-decode'; // Adjusted import statement
import axios from 'axios';

const ProtectedPage = ({ setIsHomePage, userPurchaseDate }) => {
    const [isToggled, setIsToggled] = useState(false);
    const [contactMails, setContactMails] = useState([]);
    const [contactNumbers, setContactNumbers] = useState([]);
    const [userId, setUserId] = useState(null);

    // Fetching user ID from token
    useEffect(() => {
        const token = localStorage.getItem('auth_token'); // or wherever you store your token
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                console.log("decode token is ",decodedToken);
                setUserId(decodedToken.user.id);
            } catch (error) {
                console.error('Error decoding token:', error);
            }
        }
    }, []);

    useEffect(() => {
        setIsHomePage(false);
        return () => setIsHomePage(true); // Reset when component unmounts
    }, [setIsHomePage]);

     // Load contacts from localStorage when the component mounts
     useEffect(() => {
        const savedMails = localStorage.getItem('contactMails');
        const savedNumbers = localStorage.getItem('contactNumbers');
        if (savedMails) setContactMails(JSON.parse(savedMails));
        if (savedNumbers) setContactNumbers(JSON.parse(savedNumbers));
    }, []);

    const isWeekendInIndia = () => {
        const indiaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
        const indiaDate = new Date(indiaTime);
        const day = indiaDate.getDay();
        return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
    };

    const isServiceExpired = (purchaseDate) => {
        const currentDate = new Date();
        const purchaseDateObj = new Date(purchaseDate);
        const threeMonthsLater = new Date(purchaseDateObj.setMonth(purchaseDateObj.getMonth() + 3));
        return currentDate > threeMonthsLater;
    };

    const clickHandler = () => {
        if (isWeekendInIndia()) {
            Swal.fire({
                title: 'Oops!',
                text: "We can't update contacts on Saturdays and Sundays.",
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (isServiceExpired(userPurchaseDate)) {
            Swal.fire({
                title: 'Expired!',
                text: "Contacts updation validity is expired as it was for 3 months.",
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to update the contacts?",
            icon: 'question',
            html: '<p style="color: red;">Please use all current mails and contacts both, as if you update it once, you can\'t get current emails and contacts again.</p>',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                handleConfirm();
            }
        });
    };

    const handleConfirm = async () => {
        try {
            console.log("user id in frontend when clickung update button is ",userId);
            const response = await axios.get('http://localhost:8080/contacts/data', {
                headers: {
                    'User-Id': userId,
                },
            });

            const data = response.data;
            setContactMails(data.emails);
            setContactNumbers(data.contacts);

            // Store the new contacts in localStorage
            localStorage.setItem('contactMails', JSON.stringify(data.emails));
            localStorage.setItem('contactNumbers', JSON.stringify(data.contacts));

            Swal.fire({
                title: 'Success!',
                text: 'Contacts have been updated successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } catch (error) {
            console.error('Error fetching new contacts:', error);

            Swal.fire({
                title: "Can't fetch today!",
                text: 'It could be because you have already fetched 10 emails & 10 contacts for today quota.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className="secret-page">
            <PageHeader text="Today's Contacts" />
            <ToggleButton leftOption="E-mails" rightOption="Contacts" setIsToggled={setIsToggled} isToggled={isToggled} />
            {isToggled ? <ContactCardContainer contactNumbers={contactNumbers} /> : <MailCardContainer emails={contactMails} />}
            <button onClick={clickHandler} className="next-contacts-button">Update Contacts</button>
        </div>
    );
};

export default ProtectedPage;

