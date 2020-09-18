import React, { useEffect, useRef, useState } from "react"
import Menu from "../components/menu/menu"
import Profile from '../components/profile/profile'
import { Container, Paper } from '@material-ui/core'
import Centralizer from '../components/centralizer/centralizer';
import Skills from "../components/skills/skills";
import MobileMenu from "../components/mobileMenu/mobileMenu";
import ComponentAnimation from '../components/componentAnimation/componentAnimation';



export default function Home() {
  let profile = useRef();
  let skills = useRef();
  const [showProfile, setShowProfile] = useState(true)
  const [showSkills, setShowSkills] = useState(false);

  const hideOrShowElement = (position, type) => {

    switch (type) {
      case "skills": {
        if (position.top < (window.innerHeight ) && position.bottom >= +100) {
          console.log("showskills true")
          setShowSkills(true);
        } else {
          console.log("showskills false")
          setShowSkills(false);
        }
        break;
      }
      case "profile": {
        if (position.top < (window.innerHeight ) && position.bottom >= +100) {
          console.log("showprofile true")
          setShowProfile(true);
        } else {
          console.log("showprofile false")
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
      console.log("skillsposition", skillsPosition.top, skillsPosition.bottom)
      hideOrShowElement(skillsPosition, "skills");
      hideOrShowElement(profilePosition, "profile");

    })
  },[])


  return (
    <React.Fragment>
      <Container fluid maxWidth="md">
        <Paper elevation={3}>
          <Container fluid maxWidth="md">
            <Centralizer column>
              <Menu />
              {/* <SideMenu /> */}
              <MobileMenu />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <ComponentAnimation in={showProfile}>
                <Paper elevation={2}>
                  <Container ref={profile} fluid maxWidth="md">
                    <Profile />
                  </Container>
                </Paper>
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
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <hr />
              <ComponentAnimation in={showSkills}>
                <Paper elevation={2}>
                  <Container ref={skills} fluid maxWidth="md">
                    <Skills />
                  </Container>
                </Paper>
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
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </Centralizer>
          </Container>
        </Paper>
      </Container>
    </React.Fragment >
  )
}
