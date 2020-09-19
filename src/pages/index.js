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
  const [showSkillsAnim, setShowSkillsAnim] = useState(false);

  const hideOrShowElement = (position, type) => {

    switch (type) {
      case "skills": {
        if (position.top < (window.innerHeight) && position.bottom >= 0) {
          setShowSkills(true);
          setShowSkillsAnim(true);
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
        <div className={classes.frame} style={{  }}>
          <Centralizer column>
            <Menu work={work} contact={contact} skills={skills}/>
          </Centralizer>
          <ComponentAnimation in={showProfile}>
            <section ref={profile} style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#d0e3cc", padding: "50px 50px 50px 50px" }}>
              <Profile />
            </section>
          </ComponentAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <DecoAnimTwo/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ComponentAnimation in={showPresentation}>
            <section ref={presentation} style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#f7ffdd", padding: "20px 50px 50px 50px" }}>
              <Centralizer column>
                <Presentation />
              </Centralizer>
            </section>
          </ComponentAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <DecoAnimThree/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ComponentAnimation in={showSkills}>
            <section ref={skills} style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#fc9f5b", padding: "20px 50px 50px 50px" }}>
              <Centralizer column>
                <Skills showAnim={showSkillsAnim} />
              </Centralizer>
            </section>
          </ComponentAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <DecoAnimFour/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ComponentAnimation in={showWork}>
            <section ref={work} style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#FBD1A2", padding: "20px 50px 50px 50px" }}>
              <Centralizer column>
                <Work />
              </Centralizer>
            </section>
          </ComponentAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <DecoAnim/>
          <br></br>
          <ComponentAnimation in={showContact}>
            <div ref={contact} style={{ textAlign: "center", maxWidth: "100%", padding: "20px 50px 50px 50px" }}>
              <Centralizer column>
                <Contact />
              </Centralizer>
            </div>
          </ComponentAnimation>
          <br></br>
          <br></br>
        </div>
      </Centralizer>
    </React.Fragment >
  )
}
