import React, { useState, useEffect } from 'react';
import styles from './menu.module.css';
import classnames from 'classnames';

const Menu = props => {

    const [showMenu, setShowMenu] = useState(true);

    const onScrollEventListener = () => {
        console.log("scroll event");
        if (window.pageYOffset < 7) {
            if (!showMenu) {
                console.log("set true")
                setShowMenu(true)
            }
        } else {
            if (showMenu) {
                console.log("set false")
                setShowMenu(false);
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

export default Menu;