import React from "react"
import { useSpring, animated } from 'react-spring';
import Menu from "../components/menuComponents/menu/menu"
import Profile from '../components/mainComponents/profile/profile'
import Centralizer from '../components/layout/centralizer/centralizer';
import Skills from "../components/mainComponents/skills/skills";
import Presentation from '../components/mainComponents/presentation/presentation';
import Work from "../components/mainComponents/work/work";
import Contact from "../components/mainComponents/contact/contact";
import classes from "./index.module.css";
import GitRepos from "../components/mainComponents/gitRepos/gitRepos";
import background from '../images/backgrounds/shattered-island.gif';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`


export default function Home() {
  const [anim, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))


  return (
    <React.Fragment>
      <div class="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div style={{ transform: anim.xy.interpolate(trans1) }}>
          <div className={classes.background} style={{ width: "2000px", height: "1000px" }}></div>
        </animated.div>

        <div className={classes.page}>
          <Centralizer column>
            <div className={classes.frame} style={{}}>
              <div className="profileComponentHolder">
                <section className="profileComponentSection" style={{ textAlign: "center", maxWidth: "100%", padding: "50px 50px 50px 50px" }}>
                  <Profile />
                </section>
              </div>
            </div>
          </Centralizer>
        </div>
      </div>

    </React.Fragment >
  )
}
