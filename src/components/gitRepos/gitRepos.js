import React, { useEffect, useState } from 'react';
import InnerTextHolder from '../innerTextHolder/innerTextHolder';
import repoImg from '../../images/icons/repo.png';
import classes from './gitRepos.module.css';
import Centralizer from '../centralizer/centralizer';
import Row from '../layout/row/row';
import Col from '../layout/col/col';

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
            <header>
                <h2>Gits</h2>
            </header>
            <div className={classes.container}>
                {jsonFetched && DATA.map(repo => {
                    return (
                        <div className={classes.repoBox} onClick={() => window.open(repo.html_url, "_blank")} >
                <Centralizer column>
                    <img className={classes.img} src={repoImg}></img>
                    <p>{repo.name}</p>
                </Centralizer>
                        </div>
                    )
                })}
        </div>
        </>
    )
}

export default GitRepos;