import React from 'react'
import "./navbar.css"
import Arrow from '/src/IMG/arrow.png'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <nav>
          <div className="new">
            <button>New</button>
          </div>
          <div className="plans">
            <h1>Plans now start at <span>EUR5.99</span></h1>
          </div>
          <div className="learn">
            <Link className="link">
            <div className="links">
              <p>Learn more</p><img src={Arrow} alt=""/>
            </div>
            </Link>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
