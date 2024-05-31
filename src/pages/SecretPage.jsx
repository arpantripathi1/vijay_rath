import React, { useEffect, useState } from 'react'
import MailCardContainer from '../components/MailCardContainer'
import PageHeader from '../components/PageHeader';
// import MailContactsButton from '../components/MailContactsButton';
import "../styles/SecretPage.css" ;
import ToggleButton from '../components/ToggleButton';
import ContactCardContainer from '../components/ContactCardContainer';


const SecretPage = ({ setIsHomePage }) => {
    const [isToggled, setIsToggled] = useState(false);

    useEffect(() => {
        setIsHomePage(false);
        return () => setIsHomePage(true); // Reset when component unmounts
    }, [setIsHomePage]);

return (
    <div>
        <PageHeader text="Todays Contacts" />
        <ToggleButton leftOption="E-mails" rightOption="Contacts" setIsToggled={setIsToggled} isToggled={isToggled}/>
        {/* <div className="button_container">
            <button type="submit" className='mail_btn'>E-mails</button>
            <button type="submit" className='contact_btn'>Contact</button>
        </div> */}
        {
            isToggled ? <ContactCardContainer /> : <MailCardContainer />
        }
        
        
        <p>mail directly by clicking in button in same component</p>
        <p>button to get next set of contacts, but next day . not same day</p>
    </div>
)
}

export default SecretPage