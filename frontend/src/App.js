import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Container } from "react-bootstrap"
import HomeScreen from "./Screens/HomeScreen"
const App = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <main>
          <HomeScreen></HomeScreen>
        </main>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default App
