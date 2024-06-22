import React from 'react';
import "../styles/ConfirmationDialog.css";

const ConfirmationDialog = ({ onConfirm, onCancel }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <p>If you have not completed the current emails and contacts, please complete them as you cannot get previous emails and contacts again.</p>
        <div className='dialog-buttons'>
        <button className="dialog-button" onClick={onConfirm}>Completed</button>
        <button className="dialog-button" onClick={onCancel}>Cancelled</button>
        </div>
          </div>
    </div>
  );
};

export default ConfirmationDialog;
