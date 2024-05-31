// import React from 'react'
// import "../styles/TemplateCard.css"

// const TemplateCard = ({mail}) => {
//   return (
//     <div className="card">
//       {/* <img className="card_img" src={item.poster} alt="movie_poster"/> */}
//       <div className="card_overlay">
//         <div className='card_title' >{mail ? mail.title : "" }</div>
//         {/* <div className='card_runtime'>
//           {item?item.released_on:""}
//           <span className='card_rating'>{item?item.imdb_rating:""}/10</span>
//         </div> */}
//         <div className='card_description'>{mail?mail.description:""}</div>
//       </div>
//     </div>
//   );
// }
// export default TemplateCard;


// import React, { useState, useRef } from 'react';
// import "../styles/TemplateCard.css"; // Import your CSS file
// import { MdContentCopy } from 'react-icons/md';

// const TemplateCard = ({ item }) => {
//   const [copied, setCopied] = useState(false); // State to track copy status
//   const copyRef = useRef(null); // Ref for the copyable text element

//   const handleClick = () => {
//     const textToCopy = copyRef.current.innerText; // Get text content
//     navigator.clipboard.writeText(textToCopy) // Write text to clipboard
//       .then(() => {
//         setCopied(true); // Set copied state for visual feedback
//         setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
//       })
//       .catch((err) => {
//         console.error('Failed to copy text:', err); // Handle errors
//       });
//   };

//   return (
//     <div className="template_card card">
//       <div className="card_overlay">
//         <div className="card_title">{item?.title || ""}</div>
//         <div
//           ref={copyRef} // Assign ref to the copyable text element
//           className={`card_description ${copied ? 'copied' : ''}`} // Apply copied class for styling
//           onClick={handleClick} // Attach click handler
//         >
//           {item?.description || ""}
//         </div>
//       </div>
//       <div className="copy_box" onClick={handleClick}>
//         <MdContentCopy />
//         {/* Add an icon or text indicating copy functionality (optional) */}
//       </div>
//     </div>
//   );
// };

// export default TemplateCard;



import React, { useState, useRef, useEffect } from 'react';
import "../styles/TemplateCard.css"; // Import your CSS file
import { MdContentCopy } from 'react-icons/md';

const TemplateCard = ({ item }) => {
  const [copied, setCopied] = useState(false); // State to track copy status
  const copyRef = useRef(null); // Ref for the copyable text element
  const popupRef = useRef(null); // Ref for the popup element

  const handleClick = () => {
    const textToCopy = copyRef.current.innerText;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true); // Set copied state for visual feedback
      })
      .catch((err) => {
        console.error('Failed to copy text:', err); // Handle errors
      });
  };

  // useEffect hook to manage copied state duration and popup visibility
  useEffect(() => {
    if (copied) {
      const timeoutId = setTimeout(() => setCopied(false), 1000);
      return () => {
        clearTimeout(timeoutId);
        popupRef.current.classList.remove('show'); // Hide popup on cleanup
      };
    }
  }, [copied]); // Run useEffect only when copied state changes

  return (
    <div className="template_card">
      <div className="card_overlay">
        <div className="card_title">{item?.title || ""}</div>
        <div
          ref={copyRef}
          className={`card_description ${copied ? 'copied' : ''}`}
          onClick={handleClick}
        >
          {item?.description || ""}
        </div>
      </div>
      <div className="copy_box" onClick={handleClick}>
        <MdContentCopy size={30}/>
      </div>
      <div ref={popupRef} className={`popup copied ${copied ? 'show' : ''}`}>
        Copied!
      </div>
    </div>
  );
};

export default TemplateCard;
