
import React from 'react';
import photo from '../../images/portrait.jpg';
import classes from './profile.module.css';
import Centralizer from '../centralizer/centralizer';


const Profile = props => {
    return (
        <Centralizer column>
            <br></br>
            <img className={classes.img} src={photo} alt="portrait" />
            <h1>Anthon Wellsjö</h1>
            <h2>Swedish Web Developer based in Rome</h2>
        </Centralizer>
    )
}

export default Profile;