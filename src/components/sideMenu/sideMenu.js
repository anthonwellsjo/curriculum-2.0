import React, { useState, useEffect } from 'react';
import styles from './sideMenu.module.css';
import classnames from 'classnames';
import Centralizer from '../centralizer/centralizer';

const SideMenu = props => {

    const [showMenu, setShowMenu] = useState(true);

    const onScrollEventListener = () => {
        console.log("scroll event");
        if (window.pageYOffset < 7) {
            if (showMenu) {
                console.log("set true")
                setShowMenu(false)
            }
        } else {
            if (!showMenu) {
                console.log("set false")
                setShowMenu(true);
            }
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", onScrollEventListener);
    })

    return (
        <div className={showMenu ? styles.menu : classnames(styles.menu, styles.hide)}>
            <Centralizer column>
                <div className={styles.div}>
                    <a href={"/"} className={styles.link1} to="/contact">Contact</a>
                    <a href={"/"} className={styles.link2} to="/contact">Bio</a>
                    <a href={"/"} className={styles.link3} to="/contact">Work</a>
                </div>
            </Centralizer>
        </div>
    )
}

export default SideMenu;