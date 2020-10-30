
import React, { useState } from 'react';
import photo from '../../../images/portrait.jpg';
import classes from './profile.module.css';
import Centralizer from '../../layout/centralizer/centralizer';
import Row from '../../layout/row/row';
import Col from '../../layout/col/col';
import InnerTextHolder from '../../layout/innerTextHolder/innerTextHolder';
import classnames from 'classnames';
import Contact from '../contact/contact';
import {useSpring, animated} from 'react-spring';



const Profile = props => {
    
    return (
        <Centralizer column>
            <div className={classes.frostedGlass}>
                <Centralizer column>
                    <Row reverse>
                        <InnerTextHolder>
                            <p className={classes.presentationText}>
                                Hi,
                                <br></br>
                                My name is <span className={classes.name}><strong>Anthon Wellsjö</strong></span> and 
                                I'm a full stack web developer from Sweden.
                                I'm super passionate about programming and strive 
                                to build polished and functional web apps.
                                <br></br>
                                <br></br>
                                See some of my projects <span onClick={props.clickHere} className={classes.hereBtn}>here.</span>
                            </p>
                        </InnerTextHolder>
                    </Row>
                    <footer className={classes.footer}>
                        <Row>
                            <Contact />
                        </Row>
                    </footer>
                </Centralizer>
            </div>
            <div className={classes.photoHolder}>
                <Centralizer column>

                    
                        
                   


                </Centralizer>
            </div>
        </Centralizer >

    )
}

export default Profile;