import React from 'react';
import "../styles/EmpoweringSuccess.css";
import { useNavigate } from 'react-router-dom';

function EmpoweringSuccess() {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/about'); // Navigate to the About page
    // Scroll to the top using `window.scrollTo`
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="es_container">
      <div className="heading">
        <h1>Empowering Connections, Enabling Success</h1>
      </div>
      <div className="es_sub_container">
        <img src='/images/empowering-connections.jpeg' alt='connections-pic' />
        <div className='es_content'>
          <p>Vijay Rath was created with the aim of bridging the gap between students and recruiters, revolutionizing the job search process</p>
          <p> Our Approach,Vijay Rath focuses on providing a secure and efficient platform for students to interact with potential employers, serving thousands of clients.</p>
          <button className='read_more_btn' type='submit' onClick={handleButtonClick}>READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default EmpoweringSuccess;
