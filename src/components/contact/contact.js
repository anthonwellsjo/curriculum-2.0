import React from 'react';
import Centralizer from '../centralizer/centralizer';
import InnerTextHolder from '../innerTextHolder/innerTextHolder';
import classes from './contact.module.css';
import google from '../../images/icons/google.png';
import app from '../../images/icons/app.png';
import linkedin from '../../images/icons/in.png';
import git from '../../images/icons/git.png';

const icons = {
    google: "mailto:anthonwellsjo@gmail.com",
    git: "https://github.com/anthonwellsjo/",
    linkedIn: "https://www.linkedin.com/in/anthonwellsjo",
    whatsApp: "https://api.whatsapp.com/send?phone=393396479127"
}

const Contact = () => {

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    const onIconClicked = type => {
        openInNewTab(type);
    }


    return (
        <Centralizer space>
            <img src={google} className={classes.icon} onClick={() => onIconClicked(icons.google)}></img>
            <img src={linkedin} className={classes.icon} onClick={() => onIconClicked(icons.linkedIn)}></img>
            <img src={git} className={classes.icon} onClick={() => onIconClicked(icons.git)}></img>
            <img src={app} className={classes.icon} onClick={() => onIconClicked(icons.whatsApp)}></img>
        </Centralizer>
    )
}

export default Contact;