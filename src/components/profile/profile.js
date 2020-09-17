import { Container } from '@material-ui/core';
import React from 'react';
import photo from '../../images/portrait.jpg';
import classes from './profile.module.css';
import Centralizer from '../centralizer/centralizer';


const Profile = props => {
    return (
        <Centralizer>
            <img className={classes.img} src={photo} alt="portrait" />
        </Centralizer>
    )
}

export default Profile;