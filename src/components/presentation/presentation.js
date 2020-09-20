import React, { useState } from 'react';
import InnerTextHolder from '../innerTextHolder/innerTextHolder';

const Presentation = props => {

    const getYearsSince = (dateToCompare) => {
        const todaysDate = new Date();
        const timeBtw = todaysDate.getTime() - dateToCompare.getTime();
        const years = timeBtw / (1000 * 3600 * 24) / 365;
        let answer = "";
        let literal = "years";
        if (Math.round(years) == 1) {
            literal = "year";
        }
        if (years > Math.round(years)) {
            answer = `more than ${Math.round(years)} ${literal}`;
        } else {
            answer = `less than ${Math.round(years)} ${literal}`;
        }

        return answer;
    }
    return (
        <>
            <header>
                <h2>Who am I?</h2>
            </header>
            <InnerTextHolder>
                <p>Born and raised in Åsa, Sweden. Have lived abroad since 2008. First in Paris for 8 years, and now in Rome since {getYearsSince(new Date(2015, 12, 15))}. Married and father of three. Ridiculously passionate of programming, since I started programming {getYearsSince(new Date(2019, 8, 15))} ago.</p>
            </InnerTextHolder>
        </>
    )
}

export default Presentation;