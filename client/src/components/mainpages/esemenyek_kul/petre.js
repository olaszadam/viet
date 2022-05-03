import React from 'react'
import petre_esemeny_nagy from "./petre_esemeny_nagy.png"
import "../pages.css"

const petre = () => {
  return (
    <div className='bg_kul'>
      <div className='container justify-content-center'>
        <div className='row'>
          <div className='col-sm-5 my-auto'>
            <div className='info'>
            <p><span className='szurke'>LINEUP</span><br></br><span className='feher'>PETRE INSPIRESCU<br></br>WARREN ANTHONY<br></br>SEBASTIAN ERIC<br></br>TED AMBER b2b RARESH<br></br> PE DANT b2b HRISQ<br></br>CAP b2b SUCIU</span></p>
            <p><span className='szurke'>HELYSZÍN</span><br></br> <span className='feher'>ARGALL AVE E10 7QP<br></br>LONDON</span> </p>
            <p><span className='szurke'>JEGYÁRAK</span> <br></br><span className='feher'> TIER 1 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - £12<br></br> 
            TIER 1 SIMA - £15<br></br> TIER 2 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - £20<br></br> 
            TIER 2 SIMA - £25<br></br> HELYSZÍNEN - £30 </span></p>
            <p className='rozsaszin'>TÖBB INFÓ:<br></br>FACEBOOK.COM/EVENTS/868492047120377
            FACEBOOK.COM/BLACKMAMBAPRODUCTION</p>
            </div>
          </div>
          <div className='col-sm-7'>
          <div className='container-flex' style={{textAlign: 'right'}}>
      <div className='row'>
        <div className='col-sm-12'>
          <p className='cimke'>
            <p>
              <span style={{fontWeight: "Bold", fontSize: "30px", fontFamily: "Arial Black", letterSpacing: "-0.09cm", lineHeight: '30px', color: '#FFFFFF'}}>PETRE INSPIRESCU, WARREN ANTHONY</span>
            </p>
              <p><span className='rozsaszin' style={{fontWeight: "Bold", fontSize: "100px", fontFamily: "Arial Black", letterSpacing: "-9px", lineHeight: '30px'}}>#ZEBRA LDN</span></p>
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
          <div className='col-sm-7'>
            <p style={{color: '#AC5675',lineHeight:'15px', textAlign:'center',fontFamily: "Arial Black",fontSize: '30px'}}>// EVENT COVER</p>
          </div>
      </div>
    </div>
            <img src={petre_esemeny_nagy} alt="petre" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default petre