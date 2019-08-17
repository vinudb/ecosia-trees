import React from 'react';

const Button = (props) =>
    <div data-test='buttonComponent'>
        <button
            className="button"
            onClick={props.onClickHandler}>
            {props.buttonText}
        </button>
    </div>

export default Button;

