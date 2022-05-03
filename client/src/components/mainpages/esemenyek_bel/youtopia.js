import React from 'react'
import youtopia_nagy from './youtopia_nagy.png'
import "../pages.css"

const youtopia = () => {
  return (
    <div className='bg_kul'>
      <div className='container justify-content-center'>
        <div className='row'>
          <div className='col-sm-5 my-auto'>
            <div className='info'>
            <p><span className='szurke'>LINEUP</span><br></br><span className='feher'> SPFDJ<br></br>FRANCOIS<br></br> DINA<br></br> SIKZTAH<br></br> DINA.</span></p>
            <p><span className='szurke'>HELYSZÍN</span><br></br><span className='feher'> SOROKSÁRI ÚT 158/C<br></br>BUDAPEST</span></p>
            <p><span className='szurke'>JEGYÁRAK</span><br></br><span className='feher'> TIER 1 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - 3000 HUF<br></br>
            TIER 1 SIMA - 4000 HUF<br></br>TIER 2 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - 4000 HUF<br></br>
            TIER 2 SIMA - 5000 HUF<br></br>HELYSZÍNEN - 6000 HUF</span></p>
            <p><span className='rozsaszin'>TÖBB INFÓ:<br></br>FACEBOOK.COM/EVENTS/742689443357839<br></br>
            FACEBOOK.COM/YOUTOPIABP</span></p>
            </div>
          </div>
          <div className='col-sm-7'>
          <div className='container-flex' style={{textAlign: 'right'}}>
      <div className='row'>
        <div className='col-sm-12'>
          <p className='cimke'>
            <p>
              <span style={{fontWeight: "Bold", fontSize: "30px", fontFamily: "Arial Black", letterSpacing: "-0.09cm", lineHeight: '30px', color: '#FFFFFF'}}>SPFDJ, FRANCOIS X & DINA</span>
            </p>
              <p><span className='rozsaszin' style={{fontWeight: "Bold", fontSize: "100px", fontFamily: "Arial Black", letterSpacing: "-9px", lineHeight: '30px'}}>#YOUTOPIA</span></p>
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
          <div className='col-sm-7'>
            <p style={{color: '#AC5675',lineHeight:'15px', textAlign:'center',fontFamily: "Arial Black",fontSize: '30px'}}>// EVENT COVER</p>
          </div>
      </div>
    </div>
            <img src={youtopia_nagy} alt="youtopia" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default youtopia