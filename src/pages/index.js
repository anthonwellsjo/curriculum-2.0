import React, { useEffect, useRef, useState } from "react"
import Menu from "../components/menu/menu"
import Profile from '../components/profile/profile'
import Centralizer from '../components/centralizer/centralizer';
import Skills from "../components/skills/skills";
import ComponentAnimation from '../components/componentAnimation/componentAnimation';
import Presentation from '../components/presentation/presentation';
import Work from "../components/work/work";
import Contact from "../components/contact/contact";
import classes from "./index.module.css";
import DecoAnim from "../decoAnim/decoAnim";
import DecoAnimTwo from "../components/animations/decoAnimTwo/decoAnimTwo";
import DecoAnimThree from "../components/animations/decoAnimThree/decoAnimThree";
import DecoAnimFour from "../components/animations/decoAnimFour/decoAnimFour";
import IndexElementMargin from "../components/layout/indexElementMargin/indexElementMargin";



export default function Home() {
  let profile = useRef();
  let contact = useRef();
  let skills = useRef();
  let presentation = useRef();
  let work = useRef();
  const [showProfile, setShowProfile] = useState(true)
  const [showContact, setShowContact] = useState(false)
  const [showWork, setShowWork] = useState(false)
  const [showPresentation, setShowPresentation] = useState(true)
  const [showSkills, setShowSkills] = useState(false);

  const hideOrShowElement = (position, type) => {

    switch (type) {
      case "skills": {
        if (position.top < (window.innerHeight)) {    /*bug when unmounted when scrooled by*/
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
      default: {
        break;
      }

    }

  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const skillsPosition = skills.current.getBoundingClientRect();
      const contactPosition = contact.current.getBoundingClientRect();
      const profilePosition = profile.current.getBoundingClientRect();
      const presentationPosition = presentation.current.getBoundingClientRect();
      const workPosition = work.current.getBoundingClientRect();
      hideOrShowElement(skillsPosition, "skills");
      hideOrShowElement(profilePosition, "profile");
      hideOrShowElement(presentationPosition, "presentation");
      hideOrShowElement(workPosition, "work");
      hideOrShowElement(contactPosition, "contact");

    })
  }, [])

  return (
    <React.Fragment>
      <Centralizer column>
        <div className={classes.frame} style={{}}>
          <Centralizer column>
            <Menu work={work} contact={contact} skills={skills} />
          </Centralizer>
          <div ref={profile}>
            <ComponentAnimation in={showProfile}>
              <section style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#d0e3cc", padding: "50px 50px 50px 50px" }}>
                <Profile />
              </section>
            </ComponentAnimation>
          </div>
          <IndexElementMargin />
          <Centralizer>
            <DecoAnimThree />
          </Centralizer>
          <IndexElementMargin />
          <div ref={presentation}>
            <ComponentAnimation in={showPresentation}>
              <section style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#f7ffdd", padding: "20px 50px 50px 50px" }}>
                <Centralizer column>
                  <Presentation />
                </Centralizer>
              </section>
            </ComponentAnimation>
          </div>
          <IndexElementMargin />
          <Centralizer>
            <DecoAnimThree />
          </Centralizer>
          <IndexElementMargin />
          <div ref={skills}>
            <ComponentAnimation unmountOnExit in={showSkills}>
              <section style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#dcbf85", padding: "20px 50px 50px 50px" }}>
                <Centralizer column>
                  <Skills />
                </Centralizer>
              </section>
            </ComponentAnimation>
          </div>
          <IndexElementMargin />
          <Centralizer>
            <DecoAnimThree />
          </Centralizer>
          <IndexElementMargin />
          <div ref={work}>
            <ComponentAnimation in={showWork}>
              <section style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#FBD1A2", padding: "20px 50px 50px 50px" }}>
                <Centralizer column>
                  <Work />
                </Centralizer>
              </section>
            </ComponentAnimation>
          </div>
          <IndexElementMargin />
          <div ref={contact}>
            <ComponentAnimation in={showContact}>
              <div style={{ textAlign: "center", maxWidth: "100%", padding: "20px 50px 50px 50px" }}>
                <Centralizer column>
                  <Contact />
                </Centralizer>
              </div>
            </ComponentAnimation>
          </div>
          <DecoAnim />
          <IndexElementMargin />
        </div>
      </Centralizer>
    </React.Fragment >
  )
}
