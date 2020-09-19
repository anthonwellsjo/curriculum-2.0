import React from 'react';
import Centralizer from '../../centralizer/centralizer';
import classes from './decoAnimThree.module.css';

const DecoAnimThree = () => {
    return (

        <div className={classes.container}>
            <Centralizer column space>
                <div className={classes.stick1}></div>
            </Centralizer>
        </div >

    )
}

export default DecoAnimThree;