import React from 'react'
import nofear_nagy from './nofear_nagy.png'

const nofear = () => {
  return (<>
    <div className='bg_kul'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5'>
            <div className='info'>
            <p>LINEUP DJ IBON MATRIARK TECHNOKOOL IN SILENCE KAMAFAKA AKÁC</p>
            <p>HELYSZÍN BOGDÁN UTCA 1-3 BUDAPEST</p>
            <p>JEGYÁRAK TIER 1 /BOT KEDVEZMÉNNYEL/ - 3000 HUF
            TIER 1 SIMA - 3500 HUF TIER 2 /BOT KEDVEZMÉNNYEL/ - 4000 HUF
            TIER 2 SIMA - 4500 HUF HELYSZÍNEN - 5500 HUF</p>
            <p>TÖBB INFÓ:Facebook.com/events/868492047120377
            FACEBOOK.COM/NOFEARTECHNO</p>
            </div>
          </div>
          <div className='col-sm-7'>
            <img src={nofear_nagy} alt="nofear" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default nofear