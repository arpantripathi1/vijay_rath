import React, { useEffect, useState } from 'react';
import MailCardContainer from '../components/MailCardContainer';
import PageHeader from '../components/PageHeader';
import "../styles/SecretPage.css";
import ToggleButton from '../components/ToggleButton';
import ContactCardContainer from '../components/ContactCardContainer';
import ConfirmationDialog from '../components/ConfirmationDialog';

const ProtectedPage = ({ setIsHomePage }) => {
    const [isToggled, setIsToggled] = useState(false);
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    useEffect(() => {
        setIsHomePage(false);
        return () => setIsHomePage(true); // Reset when component unmounts
    }, [setIsHomePage]);

    const clickHandler = () => {
        setIsDialogVisible(true);
    };

    const handleConfirm = async () => {
        setIsDialogVisible(false);
        try {
            // Fetch new set of contacts here
            const response = await fetch('http://localhost:8080/api/contacts');
            const data = await response.json();
            console.log('New contacts:', data);
        } catch (error) {
            console.error('Error fetching new contacts:', error);
        }
    };

    const handleCancel = () => {
        setIsDialogVisible(false);
    };

    return (
        <div className={`secret-page ${isDialogVisible ? 'blurred' : ''}`}>
            <PageHeader text="Today's Contacts" />
            <ToggleButton leftOption="E-mails" rightOption="Contacts" setIsToggled={setIsToggled} isToggled={isToggled} />
            {isToggled ? <ContactCardContainer /> : <MailCardContainer />}
            <button onClick={clickHandler} className="next-contacts-button">Update Contacts</button>
            {isDialogVisible && <ConfirmationDialog onConfirm={handleConfirm} onCancel={handleCancel} />}
        </div>
    );
};

export default ProtectedPage;
