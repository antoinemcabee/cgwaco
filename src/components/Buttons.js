import React from 'react'
import '../styles/buttons.css';

function ButtonPrimary(props) {
    return(
        <a href={props.target} className='my-btn-primary'>{props.text}</a>
    );
};

function ButtonSecondary(props) {
    return(
        <a href={props.target} className='my-btn-secondary'>{props.text}</a>
    );
};

export { ButtonPrimary, ButtonSecondary };