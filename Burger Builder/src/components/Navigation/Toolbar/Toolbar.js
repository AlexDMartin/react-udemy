import React from 'react';
import classes from './Toolbar.css';


const Toolbar = props => {
    return (
        <div className={classes.Toolbar}>
            <header>
                <div>MENU</div>
                <div>LOGO</div>
                <nav>
                    ...
                </nav>
            </header>
        </div>
    );
};

export default Toolbar;