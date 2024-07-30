import React from 'react'
import ContactCard from './ContactCard';
import "../styles/ContactCardContainer.css"

const ContactCardContainer = ({contactNumbers}) => {
  // const dummyContacts = [
  //   { sNo: 1, number: "1234567890" },
  //   { sNo: 2, number: "0987654321" },
  //   { sNo: 3, number: "5678901234" },
  //   { sNo: 4, number: "2345678901" },
  //   { sNo: 5, number: "9870123456" },
  //   { sNo: 6, number: "4567890123" },
  //   { sNo: 7, number: "8901234567" },
  //   { sNo: 8, number: "3456789012" },
  //   { sNo: 9, number: "7890123456" },
  //   { sNo: 10, number: "1230987654" },
  //   { sNo: 11, number: "5674321098" },  // Added extra objects for 15 entries
  //   { sNo: 12, number: "9012345678" },
  //   { sNo: 13, number: "3450123678" },
  //   { sNo: 14, number: "7894561023" },
  //   { sNo: 15, number: "1238905467" },
  // ];
  
  return (
    <div className="contact-card-container">
      <div className="contact-card-grid">
        {contactNumbers.map((contactNumber, index) => (
          <ContactCard key={index} contactNumber={contactNumber} /> // contactNumbers is array of object 0: {_id: '6659f8b3393c2e8d1c025e43', name: 'Daniel Rodriguez', contact: '9876543298'}
        ))}
      </div>
    </div>    
  )
}

export default ContactCardContainer