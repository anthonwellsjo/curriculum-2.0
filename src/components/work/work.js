import React from 'react';
import InnerTextHolder from '../innerTextHolder/innerTextHolder';
import Col from '../layout/col/col';
import Row from '../layout/row/row';

const Work = props => {
    const work = [
        { title: "Photo Model", duration: "2009-Ongoing", city: "Paris & Rome" },
        { title: "Music Producer", duration: "2010-20015", city: "Paris" },
        { title: "7-Eleven Staff", duration: "2008-2009", city: "Gothenburg" },
        { title: "Deconstruction Worker", duration: "2007-2008", city: "Gothenburg" },
    ]
    return (
        <>
            <header>
                <h2>Work Experience</h2>
            </header>
            <InnerTextHolder>
                {work.map(work => {
                    return (
                        <figure key={work.title}>
                            <Row>
                                <Col>
                                    <InnerTextHolder>
                                        <p>{work.title}</p>
                                    </InnerTextHolder>
                                </Col>
                                <Col>
                                    <InnerTextHolder>
                                        <p>{work.city}</p>
                                    </InnerTextHolder>
                                </Col>
                                <Col>
                                    <InnerTextHolder>
                                        <p>{work.duration}</p>
                                    </InnerTextHolder>
                                </Col>
                            </Row>
                        </figure>
                    )
                })}
            </InnerTextHolder>
        </>
    )
}

export default Work;