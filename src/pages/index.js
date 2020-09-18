import React, { useEffect, useRef, useState } from "react"
import Menu from "../components/menu/menu"
import Profile from '../components/profile/profile'
import { Container, Divider, Paper } from '@material-ui/core'
import Centralizer from '../components/centralizer/centralizer';
import Skills from "../components/skills/skills";
import MobileMenu from "../components/mobileMenu/mobileMenu";
import ComponentAnimation from '../components/componentAnimation/componentAnimation';



export default function Home() {
  let profile = useRef();
  let skills = useRef();
  const [showProfile, setShowProfile] = useState(true)
  const [showSkills, setShowSkills] = useState(false);
  const [showSkillsAnim, setShowSkillsAnim] = useState(false);

  const hideOrShowElement = (position, type) => {

    switch (type) {
      case "skills": {
        if (position.top < (window.innerHeight) && position.bottom >= 200) {
          setShowSkills(true);
          setShowSkillsAnim(true);
        } else if (showSkills == true) {
          setShowSkills(false);
        }
        break;
      }
      case "profile": {
        if (position.top < (window.innerHeight) && position.bottom >= 200) {
          setShowProfile(true);
        } else if (showProfile == true) {
          setShowProfile(false);
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
      const profilePosition = profile.current.getBoundingClientRect();
      hideOrShowElement(skillsPosition, "skills");
      hideOrShowElement(profilePosition, "profile");

    })
  }, [])

  return (
    <React.Fragment>
      <Centralizer column>
        <div style={{ width: "95%" }}>
          <Centralizer column>
            <Menu />
          </Centralizer>
          {/* <SideMenu /> */}
          <MobileMenu />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ComponentAnimation in={showProfile}>
            <div ref={profile} style={{ textAlign: "center", width: "100%", backgroundColor: "#c15640" }}>
              <Centralizer column>
                <Profile />
              </Centralizer>
            </div>
          </ComponentAnimation>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <ComponentAnimation in={showSkills}>
            <div ref={skills} style={{ textAlign: "center", width: "100%", backgroundColor: "#0878a4" }}>
              <Centralizer column>
                <Skills showAnim={showSkillsAnim} />
              </Centralizer>
            </div>
          </ComponentAnimation>
        </div>
      </Centralizer>
    </React.Fragment >
  )
}
