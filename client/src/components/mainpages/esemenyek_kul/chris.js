import React from 'react'
import chris_esemeny_nagy from "./chris_esemeny_nagy.png"

const chris = () => {
  return (
    <div className='bg_kul'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5'>
            <div className='info'>
            <p>LINEUP CHRIS STUSSYLUUK VAN DIJK JOEY DANIEL PRUNK OLIVIER WEITER MISS MELERA</p>
            <p>HELYSZÍN MEERPARKAMSTERDAM</p>
            <p>JEGYÁRAK TIER 1 /BOT KEDVEZMÉNNYEL/ - €8 
            TIER 1 SIMA - €10TIER 2 /BOT KEDVEZMÉNNYEL/ - €12 
            TIER 2 SIMA - €14HELYSZÍNEN - €16  </p>
            <p>TÖBB INFÓ:FACEBOOK.COM/EVENTS/868492047120377
            FACEBOOK.COM/BLACKMAMBAPRODUCTION</p>
            </div>
          </div>
          <div className='col-sm-7'>
            <img src={chris_esemeny_nagy} alt="marco" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default chris