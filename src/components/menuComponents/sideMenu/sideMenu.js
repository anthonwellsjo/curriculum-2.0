import React, { useState, useEffect } from 'react';
import classes from './sideMenu.module.css';


const SideMenu = props => {

    return (
        <div style={{
            right: `${window.innerWidth}px`
        }} className={classes.boulder}>

        </div>
    )
}

export default SideMenu;