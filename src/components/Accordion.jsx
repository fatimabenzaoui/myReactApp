import React, { useState } from 'react';

const Accordion = ({ title, body }) => {
    const [isOpen, setIsOpen] = useState(false);
    return ( 
        <div className="container">
            <div className="accordion">
                <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
                    <h2>{ title }</h2>
                    <div className="accordion-indicator">{ isOpen ? '-' : '+' }</div>
                </div>
                {isOpen && (
                    <div className="accordion-body">
                        { body }
                    </div>
                )}
            </div>            
        </div>
    );
}

export default Accordion;