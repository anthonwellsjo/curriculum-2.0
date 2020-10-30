import React from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import Centralizer from '../../layout/centralizer/centralizer';
import photo from '../../../images/portrait.jpg';
import classes from './portrait.module.css';

const Portrait = props => {

    const spring = useSpring({
        x: props.landing ? 1 : 0.3
    });


    return (

        <Centralizer column>
            <div className={classes.photoHolder}>
                <animated.div style={{
                    transform: spring.x
                        .interpolate((x) => `scale(${x}`)
                }}>
                    <img onClick={props.clicked} style={{ 
                        transform: props.landing ? `translateY(0)` : `translateY(-350px)`,
                        boxShadow: props.landing ? "1px 1px 50px rgb(68, 66, 66)" : "5px 5px 50px rgb(68, 66, 66)"
                     }} className={classes.img} src={photo} alt="portrait" />
                </animated.div>
            </div>
        </Centralizer>

    )
}

export default Portrait;