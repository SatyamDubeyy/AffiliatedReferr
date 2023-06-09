import React from 'react'
import "./loadingPage3.css"
import Logo from '../assets/project-logo.png'
import Inf1 from "../assets/inf1.jpg"
function LandingPage3() {
  return (
    <div>
      <div className="nav"> 
      <img src={Logo} alt="logo"/>
      </div>
      <div className="first">
        <div className="inner">
          <div className="imggrp1">
        <img src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/home/graphic1.png" alt="Influencer" />
        <img className="img2" src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/home/graphic2.png" alt="Influencer" />
        </div>
        <div class="text-group">
        <h1>Where brands and creators connect, collaborate, grow, &amp; earn more money</h1>
        <div class="button-group">
          <a href="https://creator.co/brands" class="link-btn primary">I'm a brand</a>
          <a href="https://creator.co/creators" class="link-btn secondary">I'm a creator</a>
        </div>
        <p>One tree planted for every collaboration.</p>
      </div>
        <div className="imggrp2">
        <img src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/home/graphic1.png" alt="Influencer" />
        <img className="img22" src="https://creator.co/wp-content/themes/creatorco-theme/images/pages/home/graphic2.png" alt="Influencer" />
        </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage3