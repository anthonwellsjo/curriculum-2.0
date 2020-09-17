import React, { useState, useEffect } from 'react';
import classes from './mobileMenu.module.css';
import classnames from 'classnames';
import DropDownMenu from '../dropDownMenu/dropDownMenu';

const MobileMenu = props => {
    const [menuToggled, setMenuToggled] = useState(false);

    console.log(menuToggled);
    return (
        <>
            <div className={classes.container}>
                <div onClick={() => setMenuToggled(!menuToggled)} className={!menuToggled ? null : classes.turn}>
                    <div className={classes.bar1}></div>
                    <div className={classes.bar2}></div>
                    <div className={classes.bar3}></div>
                </div>

            </div>
            <DropDownMenu show={menuToggled} />
        </>)
}


export default MobileMenu;