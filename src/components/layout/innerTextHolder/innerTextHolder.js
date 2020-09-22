import React from 'react';
import classes from './innerTextHolder.module.css';
import classnames from 'classnames';

const InnerTextHolder = props => {
    return (
        <div className={classnames(classes.div, props.classHolder)}>
            {props.children}
        </div>)
}

export default InnerTextHolder;