import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/HeroSection.css';

const HeroSection = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);


    return (
        <div className="hero-container">
            <div className="hero-content">
                <p className='hero-heading'>Stand Out from the Crowd: Connect with Real & Active Recruiters Directly</p>
                <p>"Feeling Stuck In This Competative Journey? <br/>Connect. Get Seen. Get Interviewed. Land Your Job Faster"</p>
                {
                    !isAuthenticated ? (
                        <div>
                            <h4>Sign up Today!</h4>
                            <button className="hero-button" onClick={()=>navigate("signup")}>Get Started</button>
                        </div>
                    ) :   (
                        <div>
                            <h4 style={{color:"yellow"}}>Reachout To Companies from Today!</h4>
                            <button className="hero-button" onClick={()=>navigate("services")}>Get Started</button>
                        </div>
                    )
                }

            </div>
        </div>
    );
}

export default HeroSection;

// Gateway To Success:connect to your dream companies and show your abilities
// Connect. Get Recruited. Succeed.
// We are dedicated to providing students with exclusive HR contacts to help them unlock a world of opportunities.
// Faster Job Search: Get Noticed by Recruiters Hiring Now
// Stand Out from the Crowd and Secure Your Dream Job Faster.

