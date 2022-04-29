import React from 'react'
import youtopia_nagy from './youtopia_nagy.png'

const youtopia = () => {
  return (
    <div className='bg_kul'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5'>
            <div className='info'>
            <p>LINEUP SPFDJ FRANCOIS DINA SIKZTAH DINA.</p>
            <p>HELYSZÍN SOROKSÁRI ÚT 158/CBUDAPEST</p>
            <p>JEGYÁRAK TIER 1 /BOT KEDVEZMÉNNYEL/ - 3000 HUF
            TIER 1 SIMA - 4000 HUFTIER 2 /BOT KEDVEZMÉNNYEL/ - 4000 HUF
            TIER 2 SIMA - 5000 HUFHELYSZÍNEN - 6000 HUF</p>
            <p>TÖBB INFÓ:FACEBOOK.COM/EVENTS/742689443357839
            FACEBOOK.COM/YOUTOPIABP</p>
            </div>
          </div>
          <div className='col-sm-7'>
            <img src={youtopia_nagy} alt="youtopia" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default youtopia