import React from 'react'
import facebook from '../../images/Footer/facebookblack.png'
import google from '../../images/Footer/googleblack.png'
import insta from '../../images/Footer/instablack.png'
import twitter from '../../images/Footer/twitterblack.png'
import './footer.css';


const Footer = () => {
  return (
    <>
    <div className='container'>
      <div className="tarto">
          <img className="footerlogo" src={facebook} alt="" />
          <img className="footerlogo" src={google} alt="" />
          <img className="footerlogo" src={insta} alt="" />
          <img className="footerlogo" src={twitter} alt="" />
      </div>
      <div className='szovTarto'>
          <p><span style={{fontWeight: "bold"}}>2022 * MINDEN JOG FENNTARTVA * BOT PROJECT</span> <br></br>
          MAILTO: BOT.PROJECT(KUKAC/AT)BOTPROJECT.COM <br></br>
          <span>BALOG BENCE * OLASZ ÁDÁM ERVIN * TAPODI MÁRTON</span>
          </p>
      </div>
    </div>
    </>
  )
}

export default Footer