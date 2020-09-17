import React from 'react';
import classes from './centralizer.module.css';
 
const Centralizer = props => {
return (
    <div className={classes.centralizer}>
        {props.children}
    </div>
)
}

export default Centralizer;