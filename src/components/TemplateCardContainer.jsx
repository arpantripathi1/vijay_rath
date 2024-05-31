import React from 'react'
import TemplateCard from './TemplateCard';
import "../styles/TemplateCardContainer.css"

const TemplateCardContainer = ({ array }) => {
    return (
        <div className='template-container'>
            {
                array.map((item, index) => (
                    <TemplateCard key={index} item={item} />
                ))
            }
        </div>
    )
}

export default TemplateCardContainer;