import React from 'react'
import "../styles/BenificialFor.css";

const BenificialFor = () => {
  return (
    <div className='benificial-for-container'>
            <p className='target-heading'>Who We Serve</p>

        <div className="benificial-for-section">
            <div className="target-user-column">
                <div className="target-user-logo">
                    <img src="/images/3Dmidjourney.jpeg" alt="Experienced IT Professionals" />
                </div>
                <h3>Experienced IT Professionals</h3>
                <p>
                    Our service is tailored for experienced IT professionals seeking to enhance their contact network and stay updated with industry trends.
                </p>
            </div>
            <div className="target-user-column">
                <div className="target-user-logo">
                    <img src="/images/3Dmidjourney.jpeg" alt="Freshers" />
                </div>
                <h3>Freshers</h3>
                <p>
                    Fresh graduates can benefit from our extensive database to kickstart their careers and find suitable job opportunities.
                </p>
            </div>
            <div className="target-user-column">
                <div className="target-user-logo">
                    <img src="/images/3Dmidjourney.jpeg" alt="Students" />
                </div>
                <h3>Students</h3>
                <p>
                    While primarily aimed at job seekers, students can also use our service to explore potential internships and gain industry insights.
                </p>
            </div>
        </div>
    </div>
    
  )
}

export default BenificialFor