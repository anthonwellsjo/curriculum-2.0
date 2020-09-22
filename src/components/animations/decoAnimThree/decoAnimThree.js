import React from 'react';
import Centralizer from '../../layout/centralizer/centralizer';
import classes from './decoAnimThree.module.css';
import gatsby from '../../../images/icons/gatsby.png';
import react from '../../../images/icons/react.png';

const DecoAnimThree = () => {
    return (

        <div className={classes.container}>
            <Centralizer column space>
                <div className={classes.stick1}>
                    <div className={classes.text}>
                        <img className={classes.img} src={gatsby}></img>
                    </div>
                </div>
                <div className={classes.stick1}>
                    <div className={classes.text}>
                        <img className={classes.img} src={react}></img>
                    </div>
                </div>
                <div className={classes.stick1}>
                    <div className={classes.text}>
                        <img className={classes.img} src={gatsby}></img>
                    </div>
                </div>
                <div className={classes.stick1}>
                    <div className={classes.text}>
                        <img className={classes.img} src={react}></img>
                    </div>
                </div>
                
            </Centralizer>
        </div >

    )
}

export default DecoAnimThree;