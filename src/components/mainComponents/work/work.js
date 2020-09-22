import React from 'react';
import InnerTextHolder from '../../layout/innerTextHolder/innerTextHolder';
import classes from './work.module.css';
import Col from '../../layout/col/col';
import Row from '../../layout/row/row';

const Work = props => {
    const work = [
        { title: "Photo Model", duration: "2009-Ongoing", city: "Paris & Rome" },
        { title: "Music Producer", duration: "2010-20015", city: "Paris" },
        { title: "7-Eleven Staff", duration: "2008-2009", city: "Gothenburg" },
        { title: "Deconstruction Worker", duration: "2007-2008", city: "Gothenburg" },
    ]
    return (
        <>
            <header className="componentHeader">
                <h2>Work Experience</h2>
            </header>
            <InnerTextHolder classHolder="elementContent">
                {work.map(work => {
                    return (
                        <figure className={classes.figure} key={work.title}>
                            <div className={classes.borderBtwTop}></div>
                            <Row>
                                <Col>
                                    <div style={{ minMargin: "5px"}}>
                                            <p className={classes.p}>{work.title}</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div style={{ minMargin: "5px"}}>
                                            <p className={classes.p}>{work.city}</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div style={{ minMargin: "5px"}}>
                                            <p className={classes.p}>{work.duration}</p>
                                    </div>
                                </Col>
                            </Row>
                            <div className={classes.borderBtwBottom} style={{}}></div>
                        </figure>
                    )
                })}
                <div className={classes.borderBottomLarge}></div>
            </InnerTextHolder>
        </>
    )
}

export default Work;