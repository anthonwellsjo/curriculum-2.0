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
                    <h4>JavaScript</h4>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={75}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>TypeScript</h4>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={50} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>C#</h4>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={65}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>SQL</h4>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={70}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>React.js</h4>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={75}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Gatsby.js</h4>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={65}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Xamarin</h4>
                </Col>
                <Col>
                    <div className={classes.progress}>
                        <ProgressMeter in={props.showAnim} tot={55}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>Xamarin</h4>
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