import React from 'react';
import "../styles/PageHeader.css";


function PageHeader({text}) {
  return (
    <div className="text-container">
      <h1>{text}</h1>
    </div>
  );
}

export default PageHeader;
