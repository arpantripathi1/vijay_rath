import React from 'react';
import '../styles/ToggleButton.css'; // Assuming ToggleButton.css is in the same directory

function ToggleButton({ leftOption, rightOption, setIsToggled, isToggled }) {


    return (
        <div className="toggle_container">
            <p>{leftOption}</p>
            <div className={`${isToggled ? 'toggle_btn_container active' : 'toggle_btn_container'}`} onClick={() => { setIsToggled(!isToggled) }} >
                <div className="circle">
                </div>
            </div>
            <p>{rightOption}</p>
        </div>
    );
}

export default ToggleButton;
