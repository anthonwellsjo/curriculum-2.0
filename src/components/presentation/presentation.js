import React, { useState } from 'react';
import InnerTextHolder from '../innerTextHolder/innerTextHolder';

const Presentation = props => {


    return (
        <>
            <header>
                <h2>Who am I?</h2>
            </header>
            <InnerTextHolder>
                <p>Born and raised in Åsa, Sweden. Have lived abroad since 2008. First Paris, and now Rome. Married with three kids.</p>
            </InnerTextHolder>
        </>
    )
}

export default Presentation;