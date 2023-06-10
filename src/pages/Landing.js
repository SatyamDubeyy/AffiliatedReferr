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
            <h1>Have an <br />Audience?</h1>
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
            <h1>Have an <br /> Affiliate Program?</h1>
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
        <div className="logo"><img src={Logo} alt="Affiliated Refer Logo" width={"500px"} /></div>
        <div className="written">
          <h4>We connect influencers with relevant businesses that offer commissions and rewards for promoting their items to the proper audiences.</h4>
          <p><b>If you're an influencer</b> who's struggling to monetize the attention or looking for an extra source of revenue, this should be your number-one choice. Filter and find the program that fits your niche, and start earning by becoming an affiliate. Don't wait for uncertain offers or sponsorship deals to reach your mail. No matter how small or big you are, there's a program for you here.</p>
          <p><b>If you're a business</b> with an affiliate/referral program, enlist it here by simply creating a post, and thousands of eager influencers without individually contacting them one by one. Let the right content creator promote your product or service. You're not just promoting to thousands of influencers that visit every day but to their millions of viewers. We take no commissions, and enlisting is completely free. So, there's literally no reason for you not to take this advantage.</p>
          <h5>Stay relevant, get promoted.</h5>
        </div>
      </div>
      <div className="aboutUs">
        <div className="actual">
          <div className="aleft">
          <div className="sep"></div>
          <div className="aleftdata">
          <h4>ABOUT US</h4>
          <ul>
            <li>CONTACT US</li>
            <li>USER SUPPORT</li>
            <li>FAQ</li>
          </ul>
          </div>
          </div>
          <div className="aright">
         <div className="arightdata">
          <h6>BLOG POSTS</h6>
          <h6>FOLLOW US</h6>
          <div className="icons">
            <i className="cbp-ig-icon devicon-facebook-plain"></i>
            <i class="devicon-twitter-original"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="sep"></div>
          </div>
        </div>
        <div className="last">
          <div className="wrap">
          <div className="laleft">TERMS OF USE  |  PRIVACY POLICY</div>
          <div className="laright"> &#169; 2023 affiatedrefer.com</div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Landing
