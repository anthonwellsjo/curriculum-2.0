
import React from 'react';
import photo from '../../images/portrait.jpg';
import classes from './profile.module.css';
import Centralizer from '../centralizer/centralizer';
import Row from '../layout/row/row';
import Col from '../layout/col/col';
import { TextareaAutosize } from '@material-ui/core';


const Profile = props => {
    return (
        <Row>
            <Col>
                <div style={{display: "block", textAlign: "left", margin: "auto"}}>
                    <h1>Anthon Wellsjö</h1>
                    <h3>Swedish Web Developer based in Rome</h3>
                </div>
            </Col>
            <Col>
                <Centralizer column>
                    <img className={classes.img} src={photo} alt="portrait" />
                </Centralizer>
            </Col>
        </Row>
    )
}

export default Profile;