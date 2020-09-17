import React from "react"
import Menu from "../components/menu/menu"
import Profile from '../components/profile/profile'
import { Container, Paper } from '@material-ui/core'
import Centralizer from '../components/centralizer/centralizer';
import Skills from "../components/skills/skills";
import MobileMenu from "../components/mobileMenu/mobileMenu";
import SideMenu from "../components/sideMenu/sideMenu";



export default function Home() {

  return (
    <React.Fragment>
      <Container fluid maxWidth="md">
        <Paper elevation={3}>
          <Container fluid maxWidth="md">
            <Centralizer column>
              <Menu />
              <SideMenu/>
              <MobileMenu />
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Profile />
              <h1>Anthon Wellsjö</h1>
              <h2>Swedish Web Developer based in Rome</h2>
              <br></br>
              <br></br>
              <hr />
              <Paper elevation={2}>
                <Container fluid maxWidth="md">
                  <Skills />
                </Container>
              </Paper>
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
    </React.Fragment>
  )
}
