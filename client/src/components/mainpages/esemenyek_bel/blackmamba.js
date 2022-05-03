import React from 'react'
import blackmamba_nagy from './blackmamba_nagy.png'
import "../pages.css"

const blackmamba = () => {
  return (
    <>
    <div className='bg_kul'>
    <div className='container justify-content-center'>
        <div className='row'>
          <div className='col-sm-5 my-auto'>
            <div className='info'>
            <p><span className='szurke'>LINEUP</span><br></br><span className='feher'> SASHA<br></br> SECRET FACTORY<br></br> SAMHAIN/LIVE</span></p>
            <p><span className='szurke'>HELYSZÍN</span><br></br><span className='feher'> ERZSÉBET TÉR 12<br></br> BUDAPEST</span></p>
            <p><span className='szurke'>JEGYÁRAK</span><br></br> <span className='feher'>TIER 1 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - 4000 HUF<br></br>
            TIER 1 SIMA - 5000 HUF<br></br> TIER 2 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - 5000 HUF<br></br>
            TIER 2 SIMA - 6000 HUF<br></br> HELYSZÍNEN - 7000 HUF</span></p>
            <p className='rozsaszin'>TÖBB INFÓ:<br></br>FACEBOOK.COM/EVENTS/868492047120377<br></br>
            FACEBOOK.COM/BLACKMAMBAPRODUCTION</p>
            </div>
          </div>
          <div className='col-sm-7'>
          <div className='container-flex' style={{textAlign: 'right'}}>
      <div className='row'>
        <div className='col-sm-12'>
          <p className='cimke'>
            <p>
              <span style={{fontWeight: "Bold", fontSize: "30px", fontFamily: "Arial Black", letterSpacing: "-0.09cm", lineHeight: '30px', color: '#FFFFFF'}}>SASHA, SAMHAIN, SECRET FACTORY</span>
            </p>
              <p><span className='rozsaszin' style={{fontWeight: "Bold", fontSize: "100px", fontFamily: "Arial Black", letterSpacing: "-9px", lineHeight: '30px'}}>#BLACKMAMBA</span></p>
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
          <div className='col-sm-7'>
            <p style={{color: '#AC5675',lineHeight:'15px', textAlign:'center',fontFamily: "Arial Black",fontSize: '30px'}}>// EVENT COVER</p>
          </div>
      </div>
    </div>
            <img src={blackmamba_nagy} alt="blackmamba" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default blackmamba