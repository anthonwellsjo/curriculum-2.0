import React from 'react';
import { Link } from 'gatsby';
import styles from './menu.module.css';


const Menu = props => {
    return (
        <div className={styles.menu}>
            <Link to="/contact">CONTACT</Link>
            <Link to="/contact">BIO</Link>
            <Link to="/contact">WORK</Link>
        </div>
    )
}

export default Menu;