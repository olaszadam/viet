import React from 'react'
import nice_nagy from './nice_nagy.png'
import "../pages.css"

const nice002 = () => {
  return (
    <>
    <div className='bg_kul'>
    <div className='container justify-content-center'>
        <div className='row'>
          <div className='col-sm-5 my-auto'>
            <div className='info'>
            <p><span className='szurke'>LINEUP</span><br></br><span className='feher'> INDIRECT MOVEMENT<br></br> MAKS<br></br> OBWIGSZYH<br></br> DTNB.<br></br> MANÜ/</span></p>
            <p><span className='szurke'>HELYSZÍN</span><br></br><span className='feher'> KIRÁLY UTCA 13<br></br> BUDAPEST</span></p>
            <p><span className='szurke'>JEGYÁRAK</span><br></br> <span className='feher'>TIER 1 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - 2000 HUF<br></br>
            TIER 1 SIMA - 3000 HUF<br></br>TIER 2 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - 3000 HUF<br></br>
            TIER 2 SIMA - 4000 HUF<br></br>HELYSZÍNEN - 5000 HUF</span></p>
            <p><span className='rozsaszin'>TÖBB INFÓ:<br></br>FACEBOOK.COM/EVENTS/656566082174924<br></br>
            FACEBOOK.COM/NICEPRODUCTION.BP</span></p>
            </div>
          </div>
          <div className='col-sm-7'>
          <div className='container-flex' style={{textAlign: 'right'}}>
      <div className='row'>
        <div className='col-sm-12'>
          <p className='cimke'>
            <p>
              <span style={{fontWeight: "Bold", fontSize: "30px", fontFamily: "Arial Black", letterSpacing: "-0.09cm", lineHeight: '30px', color: '#FFFFFF'}}>INDIRECT MOVEMENT, MAKS</span>
            </p>
              <p><span className='rozsaszin' style={{fontWeight: "Bold", fontSize: "100px", fontFamily: "Arial Black", letterSpacing: "-9px", lineHeight: '30px'}}>#NICE002</span></p>
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
          <div className='col-sm-7'>
            <p style={{color: '#AC5675',lineHeight:'15px', textAlign:'center',fontFamily: "Arial Black",fontSize: '30px'}}>// EVENT COVER</p>
          </div>
      </div>
    </div>
            <img src={nice_nagy} alt="nice" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default nice002