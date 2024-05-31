import React from 'react'

const ChallengeCard = ({c_logo , c_heading , c_content}) => {
  return (
        <div className="challenge">
            <span>{c_logo}</span>
          <h3>{c_heading}</h3>
          <p>{c_content}</p>
        </div>
  )
}

export default ChallengeCard