import React from 'react'
import petre_esemeny_nagy from "./petre_esemeny_nagy.png"

const petre = () => {
  return (
    <div className='bg_kul'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5'>
            <div className='info'>
            <p>LINEUPPETRE INSPIRESCUWARREN ANTHONYSEBASTIAN ERICTED AMBER b2b RARESH PE DANT b2b HRISQCAP b2b SUCIU</p>
            <p>HELYSZÍN  ARGALL AVE E10 7QPLONDON</p>
            <p>JEGYÁRAK TIER 1 /BOT KEDVEZMÉNNYEL/ - £12 
            TIER 1 SIMA - £15 TIER 2 /BOT KEDVEZMÉNNYEL/ - £20 
            TIER 2 SIMA - £25 HELYSZÍNEN - £30 </p>
            <p>TÖBB INFÓ:FACEBOOK.COM/EVENTS/868492047120377
            FACEBOOK.COM/BLACKMAMBAPRODUCTION</p>
            </div>
          </div>
          <div className='col-sm-7'>
            <img src={petre_esemeny_nagy} alt="marco" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default petre