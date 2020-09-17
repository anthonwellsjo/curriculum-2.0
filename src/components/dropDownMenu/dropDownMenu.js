import React from 'react';
import classes from './dropDownMenu.module.css';
import classnames from 'classnames';
import Centralizer from '../centralizer/centralizer';

const DropDownMenu = props => {
    console.log("show", props.show);

    let classNames = props.show ? classnames(classes.container, classes.show) : classnames(classes.container, classes.hide);

    console.log("classnames", classNames);

    return (
        <>
            <div className={classNames}>

                <div className={classes.menuholder}>
                    <Centralizer column>
                        <a href={"/"} className={classes.link} to="/contact">Contact</a>
                        <a href={"/"} className={classes.link} to="/contact">Bio</a>
                        <a href={"/"} className={classes.link} to="/contact">Work</a>
                    </Centralizer>
                </div>

            </div>
        </>
    )
}

export default DropDownMenu;