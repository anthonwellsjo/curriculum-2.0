import React, { useState, useEffect } from 'react';
import styles from './menu.module.css';
import classnames from 'classnames';

const Menu = props => {

    const [showMenu, setShowMenu] = useState(true);

    const onScrollEventListener = () => {
        if (window.pageYOffset < 7) {
            if (!showMenu) {
                setShowMenu(true)
            }
        } else {
            if (showMenu) {
                setShowMenu(false);
            }
        }
    }

    const onMouseMoveEventListener = (e) => {
        if(e.clientY < 200){
            setShowMenu(true);
        } 
    }


    useEffect(() => {
        window.addEventListener("scroll", onScrollEventListener);
        window.addEventListener("mousemove",  e => onMouseMoveEventListener(e))
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