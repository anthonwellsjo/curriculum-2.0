import React from 'react';
import Col from '../layout/col/col';
import Row from '../layout/row/row';

const Work = props => {
    return (
        <>
        <h2>Work experience:</h2>
            <Row>
                <Col>
                <h3>Photo Model</h3>
                </Col>
                <Col>
                <h3>Paris, Rome 2009-...</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                <h3>Deconstruction Worker</h3>
                </Col>
                <Col>
                <h3>Gothburg, Sweden 2005-2008</h3>
                </Col>
            </Row>
        </>
    )
}

export default Work;