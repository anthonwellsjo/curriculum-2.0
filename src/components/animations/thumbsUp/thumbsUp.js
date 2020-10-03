import React, { useEffect, useState } from 'react';
import Centralizer from '../../layout/centralizer/centralizer';
import thumb from '../../../images/icons/thumb2.png';
import classes from './thumbsUp.module.css';

const ThumbsUp = props => {
    const [rotation, setRotation] = useState({})

    useEffect(() => {
        const opacity = (function () {
            if (props.tot) {
                return 40 / 100
            } else {
                return props.tot / 100
            }
        })()
        setRotation({ transition: `transform ${props.duration}ms, opacity ${props.duration}ms, filter ${props.duration}ms`, filter: `grayscale(${100 - props.tot}%)`, transform: `rotate(${(props.tot / 100 * 180 + 180)}deg)` });

    }, [])
    return (
        <Centralizer>
            <img className={classes.img} style={props.in ? rotation : null} src={thumb} alt="thumbs up" />
        </Centralizer>
    )
}

export default ThumbsUp;