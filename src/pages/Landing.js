import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/project-logo.png'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="cont">
      <div className="left">
        <div className="leftData">
        <h1>Have an <br/>Audience?</h1>
        <div className="btn">
        <button onClick={() => {
            localStorage.setItem('userRole', 'influencer')
            navigate('/login')
          }}> I'm an Influencer</button>
          </div>
        <p>FIND WHATS RELEVANT TO YOU AND EARN COMMISSIONS & REWARDS. THOUSANDS OF PROGRAMS TO CHOOSE FROM.</p>
        </div>
        </div>
        <div className="seperator"></div>
        <div className="right">
          <div className="rightData">
        <h1>Have an <br/> Affiliate Program?</h1>
        <button onClick={() => {
            localStorage.setItem('userRole', 'business')
            navigate('/login')
          }}>  I'm a Business</button>
        <p>ENLIST IT HERE AND LET IT PROMOTE ITSELF FOR FREE. MAKE IT RELEVANT FOR THOUSANDS OF INFLUENCERS</p>
        </div>
        </div>
        
        </div>
        <div className="footer">
          <div className="boxes">
          <div className="s1">
            <h4>2000+</h4>
            <h5>INFLUENCER VISITS PER DAY</h5>
          </div>
          <div className="sep"></div>
          <div className="s2">
            <h4 className='nomargin'>FREE</h4>
            <h5 className='specialmargin nomargin'>TO SIGNUP</h5>
            <h4 className='nomargin'>EASY</h4>
              <h5 className='nomargin'>TO USE</h5>
            </div>
            <div className="sep"></div>
          <div className="s3">
          <h4>2000+</h4>
            <h5>ENLISTED PROGRAMS</h5>
          </div>
          </div>
          <div className="logo"><img src={Logo} alt="Affiliated Refer Logo" width={"500px"}/></div>

        </div>
        </>
     
  )
}

export default Landing
