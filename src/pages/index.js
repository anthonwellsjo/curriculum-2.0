import React, { useEffect, useRef, useState } from "react"
import Menu from "../components/menu/menu"
import Profile from '../components/profile/profile'
import Centralizer from '../components/centralizer/centralizer';
import Skills from "../components/skills/skills";
import MobileMenu from "../components/mobileMenu/mobileMenu";
import ComponentAnimation from '../components/componentAnimation/componentAnimation';
import Presentation from '../components/presentation/presentation';
import Work from "../components/work/work";
import Contact from "../components/contact/contact";



export default function Home() {
  let profile = useRef();
  let contact = useRef();
  let skills = useRef();
  let presentation = useRef();
  let work = useRef();
  const [showProfile, setShowProfile] = useState(true)
  const [showContact, setShowContact] = useState(false)
  const [showWork, setShowWork] = useState(false)
  const [showPresentation, setShowPresentation] = useState(false)
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
        <div style={{ width: "95%", maxWidth: "850px" }}>
          <Centralizer column>
            <Menu work={work} contact={contact} skills={skills}/>
          </Centralizer>
          {/* <SideMenu /> */}
          <MobileMenu />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ComponentAnimation in={showProfile}>
            <div ref={profile} style={{ border: "solid black 15px", textAlign: "center", maxWidth: "100%", backgroundColor: "#c15640", padding: "20px 50px 50px 50px" }}>
              <Profile />
            </div>
          </ComponentAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ComponentAnimation in={showPresentation}>
            <div ref={presentation} style={{ border: "solid black 15px", textAlign: "center", maxWidth: "100%", backgroundColor: "#003D73", padding: "20px 50px 50px 50px" }}>
              <Centralizer column>
                <Presentation />
              </Centralizer>
            </div>
          </ComponentAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ComponentAnimation in={showSkills}>
            <div ref={skills} style={{ border: "solid black 15px", textAlign: "center", maxWidth: "100%", backgroundColor: "#0878a4", padding: "20px 50px 50px 50px" }}>
              <Centralizer column>
                <Skills showAnim={showSkillsAnim} />
              </Centralizer>
            </div>
          </ComponentAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ComponentAnimation in={showWork}>
            <div ref={work} style={{ border: "solid black 15px", textAlign: "center", maxWidth: "100%", backgroundColor: "#f092a5", padding: "20px 50px 50px 50px" }}>
              <Centralizer column>
                <Work />
              </Centralizer>
            </div>
          </ComponentAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ComponentAnimation in={showContact}>
            <div ref={contact} style={{ border: "solid black 15px", textAlign: "center", maxWidth: "100%", backgroundColor: "#f092a5", padding: "20px 50px 50px 50px" }}>
              <Centralizer column>
                <Contact />
              </Centralizer>
            </div>
          </ComponentAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </Centralizer>
    </React.Fragment >
  )
}
