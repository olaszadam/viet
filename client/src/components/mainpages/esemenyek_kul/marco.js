import React from 'react'
import marco_esemeny_nagy from "./marco_esemeny_nagy.png"

const marco = () => {
  return (
    <>
    <div className='bg_kul'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5'>
            <div className='info'>
            <p>LINEUP MARCO CAROLA VANJEE GUSTA-VO</p>
            <p>HELYSZÍN DREAMCATHER AT JUNGLE TAMARINDO</p>
            <p>JEGYÁRAK TIER 1 /BOT KEDVEZMÉNNYEL/ - €30 
            TIER 1 SIMA - €40 TIER 2 /BOT KEDVEZMÉNNYEL/ - €45 
            TIER 2 SIMA - €55 HELYSZÍNEN - €65  </p>
            <p>TÖBB INFÓ:FACEBOOK.COM/EVENTS/2684157098491233
            THEBPMFESTIVAL.COM/COSTA-RICA</p>
            </div>
          </div>
          <div className='col-sm-7'>
            <img src={marco_esemeny_nagy} alt="marco" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default marco