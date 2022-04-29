import React from 'react'
import nice_nagy from './nice_nagy.png'

const nice002 = () => {
  return (
    <>
    <div className='bg_kul'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-5'>
            <div className='info'>
            <p>LINEUP INDIRECT MOVEMENT MAKS OBWIGSZYH DTNB. MANÜ</p>
            <p>HELYSZÍN KIRÁLY UTCA 13 BUDAPEST</p>
            <p>JEGYÁRAK TIER 1 /BOT KEDVEZMÉNNYEL/ - 2000 HUF
            TIER 1 SIMA - 3000 HUFTIER 2 /BOT KEDVEZMÉNNYEL/ - 3000 HUF
            TIER 2 SIMA - 4000 HUFHELYSZÍNEN - 5000 HUF</p>
            <p>TÖBB INFÓ:FACEBOOK.COM/EVENTS/656566082174924
            FACEBOOK.COM/NICEPRODUCTION.BP</p>
            </div>
          </div>
          <div className='col-sm-7'>
            <img src={nice_nagy} alt="nice" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default nice002