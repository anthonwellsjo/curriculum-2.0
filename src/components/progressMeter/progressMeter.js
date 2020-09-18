import React, {useEffect, useState} from 'react';
import classes from './progressMeter.module.css';
import classnames from 'classnames';

const ProgressMeter = props => {
    const [anim, setAnim] = useState({width: "0", transition: "width 5s"})
    useEffect(() => {
        setAnim({ width: `${props.tot}%`, transition: "width 5s" });
        console.log("set show anim")
        
    }, [])
    console.log("render progressmeter");
    return (
        <div className={classes.meter}>
            <span className={classnames(classes.span)} style={props.in? anim : null}></span>
        </div>
    )
}

export default ProgressMeter;