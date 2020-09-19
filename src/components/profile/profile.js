
import React from 'react';
import photo from '../../images/portrait.jpg';
import classes from './profile.module.css';
import Centralizer from '../centralizer/centralizer';
import Row from '../layout/row/row';
import Col from '../layout/col/col';
import InnerTextHolder from '../innerTextHolder/innerTextHolder';


const Profile = props => {
    return (
        <Row reverse>
            <Col>
                <Centralizer column>

                    <header>
                        <h1>Anthon Wellsjö</h1>
                    </header>
                    <InnerTextHolder>
                        <p>Swedish Web Developer based in Rome</p>
                    </InnerTextHolder>

                </Centralizer>
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