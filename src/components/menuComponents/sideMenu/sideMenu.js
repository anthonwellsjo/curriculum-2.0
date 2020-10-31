import React from 'react';
import classes from './sideMenu.module.css';

const jobs = [
    {
        "name": "Countries and cities",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "background": "countries"
    },
    {
        "name": "It's Chuck",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "background": "chuck"
    },
    {
        "name": "The Cube",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "background": "cube"
    },

]


const SideMenu = props => {


    return (
        <>
            <div className={classes.boulder}
                style={{
                    right: `${props.width * 0.922}px`,
                    height: `${props.height * 2}px`,
                    transform: props.showMenu ? "translateX(0) rotate(-20deg)" : `translateX(-${props.width}px)`,
                }} >

            </div>
            <div className={classes.menuHolder}>
                <ul>
                    {jobs.map(p => {
                        return (
                            <li className={classes.menuItem}>{p.name}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default SideMenu;