import React from "react";
import { useState } from "react";
// possible d'ajuster l'ouverture du collapse avec usestate

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='collapse'>
        <button className='collapse__button' onClick={() => setIsOpen(!isOpen)}>
          {title}
          <p className="collapse__arrow">&lt;</p>
        </button>        
        <div className={isOpen ? 'collapse__content' : 'content'}>
        {Array.isArray(content) ? (
          <ul className="collapse__list">
            {content.map((equipment, index) => (
              <li key={index} className="collapse__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse__text">{content}</p>
        )}
        </div>
    </div>
)  
};

export default Collapse;
