import React from 'react';
import classes from './Button.css';

const Button = (props) => {
    return (
        <div className={[classes.Button, classes[props.btnType]].join(' ')}>
            <button
                onClick={props.clicked}
            >{props.children}</button>
        </div>
    );
};

export default Button;