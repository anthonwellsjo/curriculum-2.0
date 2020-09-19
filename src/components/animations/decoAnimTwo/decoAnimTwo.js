import React from 'react';
import Centralizer from '../../centralizer/centralizer';
import classes from './decoAnimTwo.module.css';

const DecoAnimTwo = () => {
    return (

        <div className={classes.container}>
            <Centralizer column space>
                <div className={classes.stick1}></div>
            </Centralizer>
        </div >

    )
}

export default DecoAnimTwo;