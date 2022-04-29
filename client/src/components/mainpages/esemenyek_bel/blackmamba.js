import React from 'react'
import blackmamba_nagy from './blackmamba_nagy.png'

const blackmamba = () => {
  return (
    <>
    <div className='bg_kul'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5'>
            <div className='info'>
            <p>LINEUP SASHA SECRET FACTORY SAMHAIN/LIVE</p>
            <p>HELYSZÍN ERZSÉBET TÉR 12 BUDAPEST</p>
            <p>JEGYÁRAK TIER 1 /BOT KEDVEZMÉNNYEL/ - 4000 HUF
            TIER 1 SIMA - 5000 HUF TIER 2 /BOT KEDVEZMÉNNYEL/ - 5000 HUF
            TIER 2 SIMA - 6000 HUF HELYSZÍNEN - 7000 HUF</p>
            <p>TÖBB INFÓ:FACEBOOK.COM/EVENTS/868492047120377
            FACEBOOK.COM/BLACKMAMBAPRODUCTION</p>
            </div>
          </div>
          <div className='col-sm-7'>
            <img src={blackmamba_nagy} alt="blackmamba" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default blackmamba