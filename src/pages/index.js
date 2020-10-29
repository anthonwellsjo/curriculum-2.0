import React, { useState, useCallback } from "react"
import { useSpring, animated, useTransition } from 'react-spring';
import Profile from '../components/mainComponents/profile/profile'
import Centralizer from '../components/layout/centralizer/centralizer';
import classes from "./index.module.css";
import photo from '../images/portrait.jpg';
import classnames from 'classnames';
import Portrait from "../components/portrait/portrait";


const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

export default function Home() {
  const [backgroundAnimProps, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [activePages, setActivePages] = useState({ landing: true, projects: false });



  const [index, setIndex] = useState(0)
  const animationProps = useSpring({ opacity: activePages.landing ? 1 : 0 })

  const onHereClickedEventHandler = () => {
    setActivePages(prev => ({ ...prev, landing: false, projects: true }));
  }

  return (

    < React.Fragment >
      <animated.div style={animationProps}>
        <div onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          <animated.div style={{ transform: backgroundAnimProps.xy.interpolate(trans1) }}>
            <div className={classes.background} style={{ width: "2000px", height: "1000px" }}></div>
          </animated.div>
          <div className={classes.page}>
            <Centralizer column>
              <div className={classes.profileHolder}>
                <Profile clickHere={onHereClickedEventHandler} />
              </div>
            </Centralizer>
          </div>
        </div>
      </animated.div>
      <Portrait landing={activePages.landing} />
    </React.Fragment >
  )
}
