import React from 'react';
import classes from './skills.module.css';
import Row from '../layout/row/row';
import Col from '../layout/col/col';
import ProgressMeter from '../progressMeter/progressMeter';

const Skills = props => {



    return (
        <div className={classes.div}>
            <h2>Skills</h2>
            <Row>
                <Col>
                    <h3>JavaScript</h3>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={75}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>TypeScript</h3>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={50} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>C#</h3>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={65}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>SQL</h3>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={70}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>React.js</h3>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={75}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Gatsby.js</h3>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={65}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Xamarin</h3>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={55}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Skills;