import React from 'react';
import classes from './progressMeter.module.css';
import classnames from 'classnames';

const ProgressMeter = props => {
    console.log(props.tot, "props tot")
    const anim = {width: `${props.tot}`, transition: "width 5s"}

    return (
        <div className={classes.meter}>
            <span className={classnames(classes.span)} style={anim}></span>
        </div>
    )
}

export default ProgressMeter;