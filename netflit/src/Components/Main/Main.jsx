import React from 'react'
import "./main.css"
import Tv from '/src/IMG/tv.png'
import Pile from '/src/IMG/pile.png'
import Pile2 from '/src/IMG/pile2.png'
import Pile3 from '/src/IMG/div.png'

const Main = () => {
  return (
    <div>
      <div className="main-1">
        <div className="main-enjoy">
            <h1>Enjoy on your TV.</h1>
            <p>Watch on Smart TVs, Playstation, Xbox, <br/> 
                Chromecast, Apple TV, Blu-ray players, <br/> and more.
            </p>
        </div>
        <div>
         <img src={Tv} alt=""/>
        </div>
      </div>
      <div className="main-1">
        <div>
            <img src={Pile} alt=""/>
        </div>
        <div className="main-enjoy">
            <h1>Watch everywhere.</h1>
            <p>Stream unlimited movies and TV shows <br/> on your phone, tablet, laptop, and TV <br/> without paying more.</p>
        </div>
      </div>
      <div className="main-1">
        <div className="main-enjoy">
            <h1>Create profiles for kids.</h1>
            <p>Send kids on adventures with their favorite <br/> 
            characters in a space made just for them— <br/> free with your membership.
            </p>
        </div>
        <div>
         <img src={Pile2} alt=""/>
        </div>
      </div>

      <div className="main-1">
        <div>
            <img src={Pile3} alt=""/>
        </div>
        <div className="main-enjoy">
            <h1>Download your shows <br/> to watch offline.</h1>
            <p>Available on all plans except Basic with ads.</p>
        </div>
      </div>
    </div>
  )
}

export default Main
