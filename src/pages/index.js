import React, { useEffect, useRef, useState } from "react"
import Menu from "../components/menuComponents/menu/menu"
import Profile from '../components/mainComponents/profile/profile'
import Centralizer from '../components/layout/centralizer/centralizer';
import Skills from "../components/mainComponents/skills/skills";
import ComponentAnimation from '../components/animations/componentAnimation/componentAnimation';
import Presentation from '../components/mainComponents/presentation/presentation';
import Work from "../components/mainComponents/work/work";
import Contact from "../components/mainComponents/contact/contact";
import classes from "./index.module.css";
import DecoAnim from "../components/animations/decoAnim/decoAnim";
import DecoAnimThree from "../components/animations/decoAnimThree/decoAnimThree";
import IndexElementMargin from "../components/layout/indexElementMargin/indexElementMargin";
import GitRepos from "../components/mainComponents/gitRepos/gitRepos";



export default function Home() {

  //////////////////////////////////////////////element render on screen width condition
  const [renderElement, setRenderElement] = useState({ renderAnim: true })


  //////////////////////////////////////////////element distance
  const [distanceElements, setDistanceElements] = useState(70);
  
  function onMouseMoveEventHandler(e) {
    if (window.innerWidth >= 525) {
      if (e.clientY < 180) {
        setDistanceElements(100);
      } else {
        setDistanceElements(75);
      }
    }
  }

  const setDistanceBtwElementsForDedicatedMedia = (innerWidth, innerHeight) => {
    //mobile
    if (innerWidth <= 525) {
      setDistanceElements(10);
    }
    if (innerWidth > 525) {
      setDistanceElements(70);
    }
  }

  const setRenderElementsForDedicatedMedia = (innerWidth, innerHeight) => {
    //mobile
    if (innerWidth <= 525 && innerHeight > 525) {
      setRenderElement(prev => ({ ...prev, renderAnim: true }))
    }
    //desktop
    if (innerWidth > 525 && innerWidth < innerHeight) {
      setRenderElement(prev => ({ ...prev, renderAnim: true }))
    }
    //desktop
    if (innerWidth > 525 && innerHeight <= 525) {
      setRenderElement(prev => ({ ...prev, renderAnim: false }))
    }
  }





  ///////////////////////////////////////////////element visibility
  let profile = useRef();
  let contact = useRef();
  let skills = useRef();
  let git = useRef();
  let presentation = useRef();
  let work = useRef();
  const [showProfile, setShowProfile] = useState(true)
  const [showContact, setShowContact] = useState(false)
  const [showWork, setShowWork] = useState(false)
  const [showPresentation, setShowPresentation] = useState(true)
  const [showSkills, setShowSkills] = useState(false);
  const [showGit, setShowGit] = useState(false);
  const hideOrShowElement = (position, type) => {

    switch (type) {
      case "skills": {
        if (position.top < (window.innerHeight)) {    /*bug when unmounted when user scroll below element*/
          setShowSkills(true);
        } else {
          setShowSkills(false);
        }
        break;
      }
      case "profile": {
        if (position.top < (window.innerHeight) && position.bottom >= 0) {
          setShowProfile(true);
        } else {
          setShowProfile(false);
        }
        break;
      }
      case "presentation": {
        if (position.top < (window.innerHeight) && position.bottom >= 0) {
          setShowPresentation(true);
        } else {
          setShowPresentation(false);
        }
        break;
      }
      case "work": {
        if (position.top < (window.innerHeight) && position.bottom >= 0) {
          setShowWork(true);
        } else {
          setShowWork(false);
        }
        break;
      }
      case "contact": {
        if (position.top < (window.innerHeight) && position.bottom >= 0) {
          setShowContact(true);
        } else {
          setShowContact(false);
        }
        break;
      }
      case "git": {
        if (position.top < (window.innerHeight) && position.bottom >= 0) {
          setShowGit(true);
        } else {
          setShowGit(false);
        }
        break;
      }
      default: {
        break;
      }

    }

  }
  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    setRenderElementsForDedicatedMedia(windowWidth, windowHeight);
    setDistanceBtwElementsForDedicatedMedia(windowWidth, windowHeight);
    window.addEventListener("scroll", () => {
      const skillsPosition = skills.current.getBoundingClientRect();
      const contactPosition = contact.current.getBoundingClientRect();
      const profilePosition = profile.current.getBoundingClientRect();
      const presentationPosition = presentation.current.getBoundingClientRect();
      const workPosition = work.current.getBoundingClientRect();
      const gitPosition = git.current.getBoundingClientRect();
      hideOrShowElement(skillsPosition, "skills");
      hideOrShowElement(profilePosition, "profile");
      hideOrShowElement(presentationPosition, "presentation");
      hideOrShowElement(workPosition, "work");
      hideOrShowElement(contactPosition, "contact");
      hideOrShowElement(gitPosition, "git");
    })
    window.addEventListener("resize", () => {
      setDistanceBtwElementsForDedicatedMedia();
      setRenderElementsForDedicatedMedia();
    })
    document.addEventListener("mousemove", onMouseMoveEventHandler)
  }, [])
  /////////////////////////////////////////////////////////

  return (
    <React.Fragment>
      <Centralizer column>
        <div className={classes.frame} style={{}}>
          <Centralizer column>
            <Menu work={work} contact={contact} skills={skills} />
          </Centralizer>
          <div ref={profile} className="profileComponentHolder">
            <ComponentAnimation in={showProfile}>
              <section className="profileComponentSection" style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#d0e3cc", padding: "50px 50px 50px 50px" }}>
                <Profile />
              </section>
            </ComponentAnimation>
          </div>
          <IndexElementMargin distance={distanceElements} />
          <Centralizer>
            <DecoAnimThree />
          </Centralizer>
          <IndexElementMargin distance={distanceElements} />
          <div ref={presentation} className="componentHolder">
            <ComponentAnimation in={showPresentation}>
              <section className="componentSection" style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#f7ffdd", padding: "20px 50px 50px 50px" }}>
                <Centralizer column>
                  <Presentation />
                </Centralizer>
              </section>
            </ComponentAnimation>
          </div>
          <IndexElementMargin distance={distanceElements} />
          {renderElement.renderAnim && (
            <>
              <Centralizer>
                <DecoAnimThree />
              </Centralizer>
              <IndexElementMargin distance={distanceElements} />
            </>
          )}
          <div ref={skills} className="componentHolder">
            <ComponentAnimation unmountOnExit in={showSkills}>
              <section className="componentSection" style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#dcbf85", padding: "20px 50px 50px 50px" }}>
                <Centralizer column>
                  <Skills />
                </Centralizer>
              </section>
            </ComponentAnimation>
          </div>
          <IndexElementMargin distance={distanceElements} />
          {renderElement.renderAnim && (
            <>
              <Centralizer>
                <DecoAnimThree />
              </Centralizer>
              <IndexElementMargin distance={distanceElements} />
            </>
          )}
          <div ref={git} className="componentHolder">
            <ComponentAnimation in={showGit}>
              <section className="componentSection" style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#FBD1A2", padding: "20px 50px 50px 50px" }}>
                <Centralizer column>
                  <GitRepos />
                </Centralizer>
              </section>
            </ComponentAnimation>
          </div>
          <IndexElementMargin distance={distanceElements} />
          {renderElement.renderAnim && (
            <>
              <Centralizer>
                <DecoAnimThree />
              </Centralizer>
              <IndexElementMargin distance={distanceElements} />
            </>
          )}
          <div ref={work} className="componentHolder">
            <ComponentAnimation in={showWork}>
              <section className="componentSection" style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#FBD1A2", padding: "20px 50px 50px 50px" }}>
                <Centralizer column>
                  <Work />
                </Centralizer>
              </section>
            </ComponentAnimation>
          </div>
          <IndexElementMargin distance={distanceElements} />
          {renderElement.renderAnim && (
            <>
              <Centralizer>
                <DecoAnimThree />
              </Centralizer>
              <IndexElementMargin distance={distanceElements} />
            </>
          )}
          <div ref={contact} className="componentHolder">
            <ComponentAnimation in={showContact}>
              <div style={{ textAlign: "center", maxWidth: "100%", padding: "20px 50px 50px 50px" }}>
                <Centralizer column>
                  <Contact />
                </Centralizer>
              </div>
            </ComponentAnimation>
          </div>
          <DecoAnim />
          <IndexElementMargin distance={distanceElements} />
        </div>
      </Centralizer>
    </React.Fragment >
  )
}
