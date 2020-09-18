import React, { useState, useEffect } from 'react';
import styles from './sideMenu.module.css';
import classnames from 'classnames';
import Centralizer from '../centralizer/centralizer';

const SideMenu = props => {

    const [showMenu, setShowMenu] = useState(false);

    const onScrollEventListener = () => {
        if (window.pageYOffset < 7) {
            if (showMenu) {
                setShowMenu(false);
            }
        } else {
            if (!showMenu) {
                setShowMenu(true);
            }
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", onScrollEventListener);
    })

    return (
        <div className={showMenu ? styles.menu : classnames(styles.menu, styles.hide)}>
                <div className={styles.div}>
                    <a href={"/"} className={styles.link1} to="/contact">Contact</a>
                    <a href={"/"} className={styles.link2} to="/contact">Bio</a>
                    <a href={"/"} className={styles.link3} to="/contact">Work</a>
                </div>
        </div>
    )
}

export default SideMenu;