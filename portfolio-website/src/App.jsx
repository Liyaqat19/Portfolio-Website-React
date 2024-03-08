import './App.css'
import React from 'react'
import  About from './components/About'
import  Skills from './components/Skills'
import  Navbar from './components/Navbar'
import  Projects from './components/Projects'
import  Experience from './components/Experience'
import  Contact from './components/Contact'
import SocialIcons from './components/SocialIcons'

function App() {

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Projects />      
      {/* <Experience /> */}
      <Contact />
      <SocialIcons/>
    </main>
  )
}

export default App
