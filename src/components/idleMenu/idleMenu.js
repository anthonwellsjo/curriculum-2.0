import React from 'react';
import Centralizer from '../centralizer/centralizer';
import classes from './idleMenu.module.css';
import classnames from 'classnames';

const IdleMenu = props => {
    return (
        <div className={props.in? classes.container : classnames(classes.container, classes.hide)}>
            <Centralizer column>
                <div className={classes.line}></div>                
                <div className={classes.line}></div>                
            </Centralizer>
        </div>
    )
}

export default IdleMenu;