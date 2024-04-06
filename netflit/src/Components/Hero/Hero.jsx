import React from 'react'
import "./hero.css"
import Banner from '/src/IMG/banner.png'
import NetflitLogo from '/src/IMG/netflit-logo.png'
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div>
      <div className="banner">
        <img className="hero-banner" src={Banner} alt=""/>
        <div className="movie">
          <div className="hero-nav">
            <div>
              <img className="netflit" src={NetflitLogo} alt=""/>
            </div>
            <div className="eng">
              <Link className="link"><p>English</p></Link>
              <button>Sign In</button>
            </div>
          </div>
          <div className="movie-unlimited">
            <h1>Unlimited movies, Tv <br/>shows, and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p> 
            <div className="movie-sub">
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
              <input type="text" placeholder="Enter address"/><button>Get Started</button>
            </div>
          </div>         
        </div>
      </div>
    </div>
  )
}

export default Hero
