// import React, { useEffect, useState } from 'react';
// import MailCardContainer from '../components/MailCardContainer';
// import PageHeader from '../components/PageHeader';
// import "../styles/SecretPage.css";
// import ToggleButton from '../components/ToggleButton';
// import ContactCardContainer from '../components/ContactCardContainer';
// import ConfirmationDialog from '../components/ConfirmationDialog';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';

// const ProtectedPage = ({ setIsHomePage, userPurchaseDate }) => {
//     const [isToggled, setIsToggled] = useState(false);
//     const [isDialogVisible, setIsDialogVisible] = useState(false);
//     const [popupMessage, setPopupMessage] = useState('');
//     const [isPopupVisible, setIsPopupVisible] = useState(false);

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
//             setPopupMessage("We can't update contacts on Saturdays and Sundays.");
//             setIsPopupVisible(true);
//             return;
//         }

//         if (isServiceExpired(userPurchaseDate)) {
//             setPopupMessage("Contacts updation validity is expired as it was for 3 months.");
//             setIsPopupVisible(true);
//             return;
//         }

//         setIsDialogVisible(true);
//     };

//     const handleConfirm = async () => {
//         setIsDialogVisible(false);
//         try {
//             // Fetch new set of contacts here
//             const response = await fetch('http://localhost:8080/api/contacts');
//             const data = await response.json();
//             console.log('New contacts:', data);
//         } catch (error) {
//             console.error('Error fetching new contacts:', error);
//         }
//     };

//     const handleCancel = () => {
//         setIsDialogVisible(false);
//     };

//     return (
//         <div className={`secret-page ${isDialogVisible ? 'blurred' : ''}`}>
//             <PageHeader text="Today's Contacts" />
//             <ToggleButton leftOption="E-mails" rightOption="Contacts" setIsToggled={setIsToggled} isToggled={isToggled} />
//             {isToggled ? <ContactCardContainer /> : <MailCardContainer />}
//             <button onClick={clickHandler} className="next-contacts-button">Update Contacts</button>
//             {isDialogVisible && <ConfirmationDialog onConfirm={handleConfirm} onCancel={handleCancel} />}
//             <Popup open={isPopupVisible} closeOnDocumentClick onClose={() => setIsPopupVisible(false)}>
//                 <div className="popup-message">
//                     {popupMessage}
//                 </div>
//             </Popup>
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

const ProtectedPage = ({ setIsHomePage, userPurchaseDate }) => {
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        setIsHomePage(false);
        return () => setIsHomePage(true); // Reset when component unmounts
    }, [setIsHomePage]);

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
            // Fetch new set of contacts here
            const response = await fetch('http://localhost:8080/api/contacts');
            const data = await response.json();
            console.log('New contacts:', data);

            Swal.fire({
                title: 'Success!',
                text: 'Contacts have been updated successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } catch (error) {
            console.error('Error fetching new contacts:', error);

            Swal.fire({
                title: 'Error!',
                text: 'There was an error updating the contacts.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div className="secret-page">
            <PageHeader text="Today's Contacts" />
            <ToggleButton leftOption="E-mails" rightOption="Contacts" setIsToggled={setIsToggled} isToggled={isToggled} />
            {isToggled ? <ContactCardContainer /> : <MailCardContainer />}
            <button onClick={clickHandler} className="next-contacts-button">Update Contacts</button>
        </div>
    );
};

export default ProtectedPage;
