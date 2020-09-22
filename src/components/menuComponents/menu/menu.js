import React, { useState, useEffect } from 'react';
import styles from './menu.module.css';
import classnames from 'classnames';
import Hamburger from '../hamburger/hamburger';
import Centralizer from '../../layout/centralizer/centralizer';
import IdleMenu from '../idleMenu/idleMenu';

const Menu = props => {

    const [showMenu, setShowMenu] = useState(true);
    const [showIdleMenu, setShowIdleMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const onScrollEventListener = () => {
        const currentScroll = window.pageYOffset;
        setShowMobileMenu(false);
        if (window.pageYOffset < 7) {
            setShowMenu(true)
            setShowIdleMenu(false)
        } else {
            setShowMenu(false);
            setTimeout(() => {
                if (+currentScroll === +window.pageYOffset) {
                    setShowIdleMenu(true);
                }
            }, 2000)

        }
    }


    const onMouseMoveEventListener = (e) => {
        if (e.clientY < 150) {
            setShowMenu(true);
            setShowIdleMenu(false)
        } else if (window.pageYOffset > 7) {
            setShowMenu(false);
        }
    }

    const onLinkClickedEventHandler = type => {
        switch (type) {
            case "skills": {
                window.scrollTo(0, props.skills.current.offsetTop)
                break;
            }
            case "work": {
                window.scrollTo(0, props.work.current.offsetTop)
                break;
            }
            case "contact": {
                window.scrollTo(0, props.contact.current.offsetTop)
                break;
            }
            default:{
                console.log("Error", this);
            }
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", onScrollEventListener);
        window.addEventListener("mousemove", e => onMouseMoveEventListener(e))
    }, [])

    return (
        <>
            <IdleMenu in={showIdleMenu} />
            <section className={showMenu ? styles.menu : classnames(styles.menu, styles.hide)}>
                <div className={styles.div}>
                    <a onClick={() => onLinkClickedEventHandler("skills")} className={styles.link3}>Skills</a>
                    <a onClick={() => onLinkClickedEventHandler("work")} className={styles.link3}>Work</a>
                    <a onClick={() => onLinkClickedEventHandler("contact")} className={styles.link1}>Contact</a>
                </div>
            </section>
            <Hamburger in={!showMobileMenu} onClicked={() => setShowMobileMenu(true)} />
            <section className={showMobileMenu ? styles.mobileMenu : classnames(styles.mobileMenu, styles.hideMobile)}>
                <div className={styles.mobileDiv}>
                    <Centralizer>
                        <a onClick={() => onLinkClickedEventHandler("skills")} className={styles.link3}>Skills</a>
                        <a onClick={() => onLinkClickedEventHandler("work")} className={styles.link3}>Work</a>
                        <a onClick={() => onLinkClickedEventHandler("contact")} className={styles.link1}>Contact</a>
                    </Centralizer>
                </div>
            </section>
        </>
    )
}

export default Menu;