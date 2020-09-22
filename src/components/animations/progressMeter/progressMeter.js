import React, { useEffect, useState } from 'react';
import classes from './progressMeter.module.css';
import classnames from 'classnames';
import Centralizer from '../../layout/centralizer/centralizer';

const ProgressMeter = props => {
    const [anim, setAnim] = useState({ width: "0", transition: "width 5s" })
    useEffect(() => {
        setAnim({ width: `${props.tot}%`, transition: `width ${props.duration}ms` });
        console.log("set show anim")

    }, [])
    console.log("render progressmeter");
    return (
        <Centralizer>
            <div className={classes.meter}>
                <span className={classnames(classes.span)} style={props.in ? anim : null}></span>
            </div>
        </Centralizer>
    )
}

export default ProgressMeter;