import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import './index.css'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Hello World</h1>
          <button>Explore More</button>
        </div>
      </div>
      
      <About />

    </div>
  )
}
export default App;