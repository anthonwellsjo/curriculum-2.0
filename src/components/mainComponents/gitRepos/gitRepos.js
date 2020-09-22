import React, { useEffect, useState } from 'react';
import repoImg from '../../../images/icons/repo.png';
import classes from './gitRepos.module.css';
import Centralizer from '../../layout/centralizer/centralizer';
import classnames from 'classnames';

let DATA = "";




const GitRepos = props => {
    const [jsonFetched, setJsonfetched] = useState(false);
    const repo = "";

    //functions
    const fetchData = async () => {
        fetch("https://api.github.com/users/anthonwellsjo/repos")
            .then(res => res.json())
            .then(data => {
                DATA = data;
                setJsonfetched(true);
                console.log("data", DATA);
            })
            .catch(err => {
                console.log('Error: ', err)
            })
    }

    //life cycles
    useEffect(() => {
        fetchData();

    }, [])


    return (
        <>
            <header className="componentHeader">
                <h2>Gits</h2>
            </header>
            <div className={classnames(classes.container, "elementContent")}>
                {jsonFetched && DATA.map(repo => {
                    return (
                        <div key={repo.name} className={classes.repoBox} onClick={() => window.open(repo.html_url, "_blank")} >
                            <Centralizer column>
                                <h4 className={classes.h4}>{repo.name}</h4>
                                <img className={classes.img} src={repoImg}></img>
                                {repo.description && <div className={classes.popUp}>
                                    <p className={classes.p}>{repo.description}</p>
                                </div>}
                            </Centralizer>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default GitRepos;