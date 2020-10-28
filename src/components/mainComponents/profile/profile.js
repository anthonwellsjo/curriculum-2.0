
import React from 'react';
import photo from '../../../images/portrait.jpg';
import { useSpring, animated } from 'react-spring';
import classes from './profile.module.css';
import Centralizer from '../../layout/centralizer/centralizer';
import Row from '../../layout/row/row';
import Col from '../../layout/col/col';
import InnerTextHolder from '../../layout/innerTextHolder/innerTextHolder';
import classnames from 'classnames';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Profile = props => {
    const [anim, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 3500, friction: 40 } }));

    return (
        <Centralizer column>
            <div className={classes.photoHolder}>
                <Centralizer column>
                    <img className={classnames(classes.img, "profilePic")} src={photo} alt="portrait" />
                </Centralizer>
            </div>
            <div className={classes.frostedGlass}>
                <Centralizer column>
                    <Row reverse>
                        <InnerTextHolder>
                            <p className={classes.presentationText}>
                                Hi, 
                                <br></br>
                                I'm <strong>Anthon Wellsjö</strong> and I'm a full stack web developer from Sweden.
                                </p>
                            </InnerTextHolder>
                    </Row>
                </Centralizer>
            </div>
        </Centralizer >

    )
}

export default Profile;