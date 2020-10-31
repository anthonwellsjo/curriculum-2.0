import React, {useState} from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import Centralizer from '../../layout/centralizer/centralizer';
import photo from '../../../images/portrait.jpg';
import classes from './portrait.module.css';

const Portrait = props => {


    const spring = useSpring({
        x: props.landing ? 1 : 0.3
    });


    return (
        <div className={classes.verticalAlign}>
            <animated.div className={classes.animScale} style={{
                transform: spring.x
                    .interpolate((x) => `scale(${x}`)
            }}>
                <img onClick={props.clicked} style={{
                    transform: props.landing ? `translateY(${props.height*0.16}px)` : `translateY(0)`,
                    boxShadow: props.landing ? "1px 1px 50px rgb(68, 66, 66)" : "5px 5px 50px rgb(68, 66, 66)"
                }} className={classes.img} src={photo} alt="portrait" />
            </animated.div>
        </div>

    )
}

export default Portrait;