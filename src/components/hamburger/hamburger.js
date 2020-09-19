import React from 'react';
import classes from './hamburger.module.css';
import classnames from 'classnames';
import Centralizer from '../centralizer/centralizer';

const Hamburger = props => {
    return (
        <div className={props.in ? classnames(classes.container,) : classnames(classes.container, classes.hide)}>
            <Centralizer>
                <div onClick={props.onClicked}>
                    <div className={classes.bar1}></div>
                    <div className={classes.bar2}></div>
                    <div className={classes.bar3}></div>
                </div>
            </Centralizer>
        </div>
    )
}

export default Hamburger;