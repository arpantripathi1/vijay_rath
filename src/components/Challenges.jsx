import React from 'react';
import "../styles/Challenges.css";
import ChallengeCard from './ChallengeCard';
import { FaList } from 'react-icons/fa';
import { CgSandClock } from 'react-icons/cg';
import { TiSpiral } from 'react-icons/ti';
import { FaMobileScreen } from 'react-icons/fa6';

function Challenges() {
  return (
    <div className="challenge_container">
      <div className="heading">
        <h1>Student Contact Access</h1>
        <p>Discover the common challenges faced by students in reaching out to potential recruiters</p>
      </div>
      <div className="challenges">
        <ChallengeCard c_logo={<FaList /> } c_heading="Limited Contacts" c_content="Students struggle with accessing a diverse range of HR emails and contact numbers to kickstart their careers" />
        <ChallengeCard c_logo={ <CgSandClock />} c_heading="Outdated Information" c_content="Difficulty in obtaining up-to-date email addresses and contact details of relevant HR professionals in various industries" />
        <ChallengeCard c_logo={ <TiSpiral />} c_heading="Time-Consuming Process" c_content=" Wasting hours searching for email addresses and contact numbers of recruiters, hindering the job application process" />
        <ChallengeCard c_logo={ <FaMobileScreen />} c_heading="Ineffective Communication" c_content="Struggling to make meaningful connections with potential employers due to lack of direct contact information" />
      </div>
    </div>
  );
}

export default Challenges;
