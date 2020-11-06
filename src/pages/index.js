import React, { useState, useEffect } from "react"
import { useSpring, animated, useTransition } from 'react-spring';
import Profile from '../components/mainComponents/profile/profile'
import Centralizer from '../components/layout/centralizer/centralizer';
import classes from "./index.module.css";
import Portrait from "../components/mainComponents/portrait/portrait";
import TopMenu from '../components/menuComponents/topMenu/topMenu';
import Projects from '../components/mainComponents/projects/projects';
import { PageContext } from '../contexts/Contexts';




const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`


export default function Home() {
  //--------------------------------------------------------State

  const [pageInfo, setPageInfo] = useState({ isMobile: false, isLoaded: false });
  const [backgroundAnimProps, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [activePages, setActivePages] = useState({ landing: true, projects: false });
  const [windowMeasures, setWindowMeasures] = useState({ width: 0, height: 0 });
  const animationProps = useSpring({ opacity: activePages.landing ? 1 : 0 });


  //---------------------------------------------------------Event handlers
  const onScreenSizeChangedEventHandler = () => {
    setWindowMeasures({ width: window.innerWidth, height: window.innerHeight });
    verifyDevice();
  }

  const onPageLoadedEventHandler = () => {
    console.log("page loaded");
    setPageInfo(prev=>({...prev, isLoaded: true}));
  }

  const onHereClickedEventHandler = () => {
    setActivePages(prev => ({ ...prev, landing: false, projects: true }));
  }

  const onPhotoClickedEventHandler = () => {
    if (!activePages.landing) {
      setActivePages(prev => ({ ...prev, landing: true, projects: false }));
    }
  }

  //------------------------------------------------------------Functions

  const verifyDevice = () => {
    var mobile = true;
    if (window.innerWidth < 380){
      mobile = true;
    } else {mobile = false}
    setPageInfo(prev => ({ ...prev, isMobile: mobile }));
  }

  //---------------------------------------------------------------Life cycles

  useEffect(() => {
    window.addEventListener("resize", onScreenSizeChangedEventHandler);
    window.addEventListener("load", onPageLoadedEventHandler)
    setWindowMeasures({ width: window.innerWidth, height: window.innerHeight });
    verifyDevice();
  }, [])

  return (
    < React.Fragment >
      <PageContext.Provider value={pageInfo}>
        <div className={classes.page}>
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
          <TopMenu showMenu={!activePages.landing} />
          <Portrait height={windowMeasures.height} clicked={onPhotoClickedEventHandler} landing={activePages.landing} />
          {/* <Background width={windowMeasures.width} height={windowMeasures.height}/> */}
          <Projects height={windowMeasures.height} show={activePages.projects} height={windowMeasures.height} />
        </div>
      </PageContext.Provider>
    </React.Fragment >
  )
}
