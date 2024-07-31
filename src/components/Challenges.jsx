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
        <h1>Reality & Challenges of Job Hunting Process</h1>
        <p>Discover the common challenges faced by students in reaching out to potential recruiters</p>
      </div>
      <div className="challenges">
        <ChallengeCard c_logo={<FaList /> } c_heading="Limited Contacts" c_content="Students struggle with accessing a diverse range of HR emails and contact numbers to kickstart their careers" />
        <ChallengeCard c_logo={ <CgSandClock />} c_heading="Outdated Information" c_content="Difficulty in obtaining up-to-date email addresses and contact details of relevant HR professionals in various industries" />
        <ChallengeCard c_logo={ <TiSpiral />} c_heading="Time-Consuming Process" c_content=" Wasting hours searching for emails and contact numbers of recruiters,still get fake contacts" />
        <ChallengeCard c_logo={ <FaMobileScreen />} c_heading="No Enough Opportunities" c_content="Many job seekers end up with few interview opportunities, forcing them to change careers or remain jobless." />
        <ChallengeCard c_logo={ <FaMobileScreen />} c_heading="Ineffective Communication" c_content="Candidates struggling to communicate effectively with recruiters to inquire about job availability correctly, resulting in poor impressions & no interviews." />
        <ChallengeCard c_logo={ <FaMobileScreen />} c_heading="Lack of smartness" c_content="Not smart enough to get raw reality, lacking crucial skills,unaware of smart & clever tactics includes hidden support during interviews, which are crucial to land a job in a competitive environment." />
      </div>
    </div>
  );
}

export default Challenges;
