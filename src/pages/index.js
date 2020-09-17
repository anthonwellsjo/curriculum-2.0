import React from "react"
import Menu from "../components/menu/menu"
import Profile from '../components/profile/profile'
import { Container, Paper } from '@material-ui/core'

export default function Home() {
  return (
    <React.Fragment>
      <Container fluid maxWidth="md">
        <Paper elevation={3}>
          <Container fluid maxWidth="md">
            <Profile />
            <Menu />
          </Container>
        </Paper>
      </Container>
    </React.Fragment>
  )
}
