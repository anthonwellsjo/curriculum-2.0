import React from "react"
import Menu from "../components/menuComponents/menu/menu"
import Profile from '../components/mainComponents/profile/profile'
import Centralizer from '../components/layout/centralizer/centralizer';
import Skills from "../components/mainComponents/skills/skills";
import Presentation from '../components/mainComponents/presentation/presentation';
import Work from "../components/mainComponents/work/work";
import Contact from "../components/mainComponents/contact/contact";
import classes from "./index.module.css";
import GitRepos from "../components/mainComponents/gitRepos/gitRepos";



export default function Home() {



  return (
    <React.Fragment>
      <Centralizer column>
        <div className={classes.frame} style={{}}>
          <div className="profileComponentHolder">
            <section className="profileComponentSection" style={{ textAlign: "center", maxWidth: "100%", backgroundColor: "#d0e3cc", padding: "50px 50px 50px 50px" }}>
              <Profile />
            </section>
          </div>
        </div>
      </Centralizer>
    </React.Fragment >
  )
}
