import React, { useState, useCallback, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import './styles.css'
import countries from '../../../images/projects/countriesandcities.jpg';
import chuck from '../../../images/projects/itschuck.jpg';
import InnerTextHolder from '../../layout/innerTextHolder/innerTextHolder';
import Centralizer from '../../layout/centralizer/centralizer';
import react from '../../../images/icons/react.png';
import gatsby from '../../../images/icons/gatsby.png';
import mongodb from '../../../images/icons/mongoDB.png';
import typescript from '../../../images/icons/typescript.png';
import mongoose from '../../../images/icons/mongoose.png';
import node from '../../../images/icons/node.png';

const work = [
  {
    "name": "Countries and cities",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "background": 'lightblue',
    "technologies": [react, gatsby, typescript]
  },
  {
    "name": "It's Chuck",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "background": 'lightgreen',
    "technologies": [react, gatsby, mongodb, typescript, node]
  },
  {
    "name": "The Cube",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "background": 'lightgray',
    "technologies": [react, gatsby, mongodb, typescript, node]
  },

]




// const pagestemp = [
//   ({ style }) => <animated.div style={{ ...style, background: `lightpink` }}><h2>A</h2></animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
// ]

export default function Projects(props) {

  const pages = work.map(w => {
    return ({ style }) => <animated.div style={{ ...style, background: w.background }}>
      <div className="technologyHolder">

          {w.technologies.map((t,i)=> <img style={{height: "5%", width: "5%", marginTop: "30px"}} key={i} src={t}/>)}

      </div>
      <InnerTextHolder top={props.height * 0.7}>
        <h2 style={{ textAlign: "center" }}>{w.name}</h2>
        <p>{w.description}</p>
      </InnerTextHolder>
    </animated.div>
  });

  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })



  return (
    <div style={{
      transform: props.show ? `translateY(0)` : `translateY(${props.height}px)`,
      opacity: props.show ? 1 : 0
    }} className="projects-holder">
      <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[item]
          return <Page key={key} style={props} />
        })}
      </div>
    </div>
  )
}

