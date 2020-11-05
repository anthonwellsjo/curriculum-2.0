import React, { useState, useEffect } from 'react';
import styles from './topMenu.module.css';
import classnames from 'classnames';
import IdleMenu from '../idleMenu/idleMenu';
import Contact from '../../mainComponents/contact/contact';

const TopMenu = props => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <section className={props.showMenu ? styles.menu : classnames(styles.menu, styles.hide)}>
                <div className={styles.div}>
                    {/* <a onClick={() => alert("click")}>Skills</a>
                    <a onClick={() => alert("click")}>Work</a>
                    <a onClick={() => alert("click")}>Contact</a> */}
                </div>
                <div className={styles.contactHolder}>
                    <Contact small/>
                </div>
            </section>
        </>
    )
}

export default TopMenu;