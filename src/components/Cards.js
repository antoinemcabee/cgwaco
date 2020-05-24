import React from 'react';
import "../styles/landing.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardPrimary(props) {
    return (
        <div>
            <FontAwesomeIcon icon={props.icon} className='secondary-text'/>
            <h3 className='primary-text'>{props.heading}</h3>
            <p>
                {props.text}
            </p>
        </div>
        
    );
}

export default CardPrimary;