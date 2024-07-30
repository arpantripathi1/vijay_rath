import React from 'react';
import "../styles/ContactCard.css";

const ContactCard = ({contactNumber}) => {
  return (
    <div className='contact_card'>
      {/* <p>{item.sNo}</p> */}
      <h4>{contactNumber.name}</h4>
      <h4>{contactNumber.contact}</h4>
      {/* <label htmlFor="working">Working</label>
      <input type="radio" id="working" name="status" value="working" />
      <label htmlFor="switchOff">Switch Off</label>
      <input type="radio" id="switchOff" name="status" value="switchOff" /> */}
    </div>
  );
};

export default ContactCard;
