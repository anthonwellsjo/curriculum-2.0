import React from 'react';
import classes from './skills.module.css';
import Row from '../layout/row/row';
import Col from '../layout/col/col';
import ProgressMeter from '../progressMeter/progressMeter';
import InnerTextHolder from '../innerTextHolder/innerTextHolder';




const Skills = props => {

    function timer(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    const skills = [
        { skill: "JavaScript", tot: 75 },
        { skill: "TypeScript", tot: 55 },
        { skill: "C#", tot: 65 },
        { skill: "SQL", tot: 50 },
        { skill: "React.Js", tot: 80 },
        { skill: "Gatsby.Js", tot: 60 },
        { skill: "Xamarin", tot: 50 },
    ]

    function timer(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    return (
        <>
            <header>
                <h2>Skills</h2>
            </header>
            <InnerTextHolder>
                {skills.map((skill) => {
                    return (
                        <figure key={skill.skill}>
                            <Row>
                                <Col>
                                    <p>{skill.skill}</p>
                                </Col>
                                <Col>
                                    <div className={classes.progress}>
                                        <ProgressMeter in={props.showAnim} tot={skill.tot} />
                                    </div>
                                </Col>
                            </Row>
                        </figure>
                    )
                })}
            </InnerTextHolder>
        </>
    )
}

export default Skills;