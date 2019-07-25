import React from 'react';
import classes from './Button.css';

const Button = () => {
    return (
        <div className={[classes.Button, classes[props.btnType].join(' ')]}>
            <button
                onClick={props.clicked}
            >{props.children}</button>
        </div>
    );
};

export default Button;