import React from 'react';
import classes from './innerTextHolder.module.css';

const InnerTextHolder = props => {
    return (
        <div className={classes.div}>
            {props.children}
        </div>)
}

export default InnerTextHolder;