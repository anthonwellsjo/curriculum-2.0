import React from 'react';
import classnames from 'classnames';
import Centralizer from '../../layout/centralizer/centralizer';
import classes from './contact.module.css';
import google from '../../../images/icons/icons8-gmail-50.png';
import app from '../../../images/icons/icons8-whatsapp-50.png';
import linkedin from '../../../images/icons/icons8-linkedin-50.png';
import git from '../../../images/icons/icons8-github-50.png';
import cv from '../../../images/icons/icons8-cv-50.png';

const icons = {
    google: "mailto:anthonwellsjo@gmail.com",
    git: "https://github.com/anthonwellsjo/",
    linkedIn: "https://www.linkedin.com/in/anthonwellsjo",
    whatsApp: "https://api.whatsapp.com/send?phone=393396479127",
    cv: "https://docs.google.com/document/d/14DauHPfdwFJyjsd-Tuxp3lAvxpgwA1erzqx5GIZ5hR4/edit?usp=sharing"
}

const Contact = props => {

    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }
    const onIconClicked = type => {
        openInNewTab(type);
    }


    return (
        <div className={classes.contactContainer}>
            <img src={linkedin} className={props.small? classnames(classes.icon, classes.small) : classes.icon} onClick={() => onIconClicked(icons.linkedIn)}></img>
            <img src={git} className={props.small? classnames(classes.icon, classes.small) : classes.icon} onClick={() => onIconClicked(icons.git)}></img>
            <img src={google} className={props.small? classnames(classes.icon, classes.small) : classes.icon} onClick={() => onIconClicked(icons.google)}></img>
            <img src={app} className={props.small? classnames(classes.icon, classes.small) : classes.icon} onClick={() => onIconClicked(icons.whatsApp)}></img>
            <img src={cv} className={props.small? classnames(classes.icon, classes.small) : classes.icon} onClick={() => onIconClicked(icons.cv)}></img>
        </div>
    )
}

export default Contact;