import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Centralizer from '../centralizer/centralizer';
import classes from './skills.module.css';

const Skills = props => {

    return (
        <div className={classes.div}>
            <Centralizer column>
                <h2>Skills</h2>
                <Centralizer>
                    <h4>JavaScript</h4>
                    <div className={classes.progress}>
                        <LinearProgress variant="determinate" value={45} />
                    </div>
                </Centralizer>
                <Centralizer >
                    <h4>TypeScript</h4>
                    <div className={classes.progress}>
                        <LinearProgress variant="determinate" value={45} />
                    </div>
                </Centralizer>
                <Centralizer >
                    <h4>SQL</h4>
                    <div className={classes.progress}>
                        <LinearProgress variant="determinate" value={45} />
                    </div>
                </Centralizer>
                <Centralizer >
                    <h4>HTML5 & CSS</h4>
                    <div className={classes.progress}>
                        <LinearProgress variant="determinate" value={45} />
                    </div>
                </Centralizer>
                <Centralizer >
                    <h4>React.Js</h4>
                    <div className={classes.progress}>
                        <LinearProgress variant="determinate" value={45} />
                    </div>
                </Centralizer>
            </Centralizer>
        </div>
    )
}

export default Skills;