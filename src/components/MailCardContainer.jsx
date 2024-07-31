import React from 'react';
import MailCard from './MailCard'; // Assuming MailCard component is defined elsewhere
import "../styles/MailCardContainer.css";

const MailCardContainer = ({emails}) => {
//  const dummyMails = [
//     { sNo: "01", mail: "recruit@samplecompany.com" },
//     { sNo: "02", mail: "hr.department@anothercompany.org" },
//     { sNo: "03", mail: "careers@interestingstartup.io" },
//     { sNo: "04", mail: "jobs@establishedfirm.net" },
//     { sNo: "05", mail: "talent@globalcorporation.com" },
//     { sNo: "06", mail: "recruiting@growthcompany.co.uk" },
//     { sNo: "07", mail: "careers@innovationlab.tech" },
//     { sNo: "08", mail: "hiring@designstudio.agency" },
//     { sNo: "09", mail: "jobs@financialinstitution.bank" },
//     { sNo: "10", mail: "talent@healthcareprovider.org" },
//     { sNo: "11", mail: "recruit@samplecompany.com" },
//     { sNo: "12", mail: "hr.department@anothercompany.org" },
//     { sNo: "13", mail: "careers@interestingstartup.io" },
//     { sNo: "14", mail: "jobs@establishedfirm.net" },
//     { sNo: "15", mail: "talent@globalcorporation.com" },
//     { sNo: "16", mail: "recruiting@growthcompany.co.uk" },
//     { sNo: "17", mail: "careers@innovationlab.tech" },
//     { sNo: "18", mail: "hiring@designstudio.agency" },
//     { sNo: "19", mail: "jobs@financialinstitution.bank" },
//     { sNo: "20", mail: "talent@healthcareprovider.org" },
//     { sNo: "21", mail: "recruit@samplecompany.com" },
//     { sNo: "22", mail: "hr.department@anothercompany.org" },
//     { sNo: "23", mail: "careers@interestingstartup.io" },
//     { sNo: "24", mail: "jobs@establishedfirm.net" },
//     { sNo: "25", mail: "talent@globalcorporation.com" },
//     { sNo: "26", mail: "recruiting@growthcompany.co.uk" },
//     { sNo: "27", mail: "careers@innovationlab.tech" },
//     { sNo: "28", mail: "hiring@designstudio.agency" },
//     { sNo: "29", mail: "jobs@financialinstitution.bank" },
//     { sNo: "30", mail: "talent@healthcareprovidededbjhkedbdhkdebdejkr.orgbdueipwdwenduwebftey8eddgye" },
//     // You can add more objects here following the same format
//   ]
  
  return (
    <div className="mail-card-container">
      <div className="mail-card-grid">
        {emails.map((email, index) => (
          <MailCard key={index} email={email} />    // emails is array of objects.   0 : {_id: '6659f53c393c2e8d1c025e22', mail: 'recruit@samplecompany.com'}
        ))}
      </div>
    </div>
  );
};

export default MailCardContainer;
