import React, { useEffect, useState } from 'react';
import classes from './skills.module.css';
import Row from '../../layout/row/row';
import Col from '../../layout/col/col';
import ProgressMeter from '../../animations/progressMeter/progressMeter';
import InnerTextHolder from '../../layout/innerTextHolder/innerTextHolder';
import ThumbsUp from '../../animations/thumbsUp/thumbsUp';




const Skills = props => {
    const [anim, setAnim] = useState({ show: false, donkey: "white" });

    function timer(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    const skills = [
        { skill: "HTML5 & CSS 3", tot: 100 },
        { skill: "JavaScript", tot: 90 },
        { skill: "TypeScript", tot: 55 },
        { skill: "C#", tot: 65 },
        { skill: "SQL", tot: 50 },
        { skill: "React.Js", tot: 90 },
        { skill: "Gatsby.Js", tot: 80 },
        { skill: "Xamarin", tot: 50 },
        { skill: "JQuery", tot: 80 },
        { skill: "ASP.Net", tot: 75 },
        { skill: "Java", tot: 0 },
        
    ]

    function timer(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    useEffect(() => {
        setTimeout(() => {
            setAnim({ show: true })
        })
    }, 200);

    return (
        <>
            <header>
                <h2>Skills</h2>
            </header>
            <InnerTextHolder>
                {skills.map((skill) => {
                    return (
                        <figure className={classes.figure} key={skill.skill}>
                            <Row>
                                <Col>
                                    <p>{skill.skill}</p>
                                </Col>
                                <Col>
                                    <div className={classes.progress}>
                                        <ProgressMeter in={anim.show} duration={1000} tot={skill.tot} />
                                    </div>
                                </Col>
                                <Col>
                                    <ThumbsUp in={anim.show} duration={1000} tot={skill.tot} />
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