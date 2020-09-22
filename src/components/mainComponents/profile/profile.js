
import React from 'react';
import photo from '../../../images/portrait.jpg';
import classes from './profile.module.css';
import Centralizer from '../../layout/centralizer/centralizer';
import Row from '../../layout/row/row';
import Col from '../../layout/col/col';
import InnerTextHolder from '../../layout/innerTextHolder/innerTextHolder';
import classnames from 'classnames';


const Profile = props => {
    return (
        <Row reverse>
            <Col>
                <Centralizer column>
                    <header className="profileHeader">
                        <h1 className="profileHeaderText">Anthon Wellsjö</h1>
                    </header>
                    <InnerTextHolder className="hideOnHorizontal">
                        <p className="presentationText">Swedish Web Developer based in Rome</p>
                    </InnerTextHolder>

                </Centralizer>
            </Col>
            <Col>
                <Centralizer column>
                    <img className={classnames(classes.img, "profilePic")} src={photo} alt="portrait" />
                </Centralizer>
            </Col>
        </Row>
    )
}

export default Profile;