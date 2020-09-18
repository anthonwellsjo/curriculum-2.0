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
        if (e.clientY < 200) {
            setShowMenu(true);
        }
    }

    const onLinkClickedEventHandler = type => {
        switch(type){
            case "skills":{
                window.scrollTo(0, props.skills.current.offsetTop)  
                break;
            }
            case "work":{
                window.scrollTo(0, props.work.current.offsetTop)  
                break;
            }
            case "contact":{
                window.scrollTo(0, props.contact.current.offsetTop)  
                break;
            }
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", onScrollEventListener);
        window.addEventListener("mousemove", e => onMouseMoveEventListener(e))
    })

    return (
        <div className={showMenu ? styles.menu : classnames(styles.menu, styles.hide)}>
            <div className={styles.div}>
                <a onClick={()=>onLinkClickedEventHandler("skills")} className={styles.link3}>Skills</a>
                <a onClick={()=>onLinkClickedEventHandler("work")} className={styles.link3}>Work</a>
                <a onClick={()=>onLinkClickedEventHandler("contact")} className={styles.link1}>Contact</a>
            </div>
        </div>
    )
}

export default Menu;