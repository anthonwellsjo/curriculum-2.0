import React, { useState } from 'react';
import classes from './componentAnimation.module.css';
import classnames from 'classnames';

const ComponentAnimation = (props) => {
    const [animation, setAnimation] = useState(classes.fade);
    const [hasBeenSet, setHasBeenSet] = useState(false);
    if (!hasBeenSet) {

        switch (props.type) {
            case "fade": {
                {
                    setAnimation(classes.fade);
                    break;
                }

            }
            default: {
                {
                    setAnimation(classes.fade);
                    break;
                }
            }
        }
        setHasBeenSet(true);
    }
    
    return (
        <div className={props.in ? classnames(classes.in) : animation}>
            {props.children}
        </div>
    )
}

export default ComponentAnimation;