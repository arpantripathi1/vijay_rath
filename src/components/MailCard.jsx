import React from 'react'
import { IoMdMail } from 'react-icons/io'
import "../styles/MailCard.css";

const MailCard = ({email}) => {

  const handleClick = () => {
    // Redirect to user's default email client using window.location.href
    window.location.href = `mailto:${email.mail}`;
  };


  return (
    <div className='mail_card'>
        {/* <p>{item.sNo}</p> */}
        <h4>{email.mail}</h4>
        <IoMdMail size={35} onClick={handleClick}  style={{
          cursor: 'pointer',
          color: '#007bff', 
        }}/>
    </div>
  )
}

export default MailCard;