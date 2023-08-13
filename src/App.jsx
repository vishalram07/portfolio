import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
     <Header />
     <Nav /><br/><br/><br/>
     <About /><br/><br/><br/>
     <Experience /><br/><br/><br/>
     <Services /><br/><br/><br/>
     <Portfolio /><br/><br/><br/>
     <Contact /><br/><br/><br/>
     <Footer />
    </>
  )
}

export default App