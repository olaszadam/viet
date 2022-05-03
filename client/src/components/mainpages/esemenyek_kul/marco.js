import React from 'react'
import marco_esemeny_nagy from "./marco_esemeny_nagy.png"
import "../pages.css"

const marco = () => {
  return (
    <>
    <div className='bg_kul'>
      <div className='container justify-content-center'>
        <div className='row'>
          <div className='col-sm-5 my-auto'>
            <div className='info'>
            <p><span className='szurke'>LINEUP</span><br></br><span className='feher'>MARCO CAROLA<br></br> VANJEE<br></br> GUSTA-VO</span> </p>
            <p><span className='szurke'>HELYSZÍN</span><br></br><span className='feher'> DREAMCATHER AT JUNGLE<br></br> TAMARINDO</span></p>
            <p><span className='szurke'>JEGYÁRAK</span><br></br> <span className='feher'> TIER 1 /BOT KEDVEZMÉNNYEL/<span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - €30<br></br> 
            TIER 1 SIMA - €40<br></br> TIER 2 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - €45<br></br> 
            TIER 2 SIMA - €55<br></br> HELYSZÍNEN - €65</span></p>
            <p><span className='rozsaszin'>TÖBB INFÓ:<br></br>FACEBOOK.COM/EVENTS/2684157098491233
            THEBPMFESTIVAL.COM/COSTA-RICA</span></p>
            </div>
          </div>
          <div className='col-sm-7'>
          <div className='container' style={{textAlign: 'right'}}>
      <div className='row'>
        <div className='col-sm-12'>
          <p className='cimke'>
            <p>
              <span style={{fontWeight: "Bold", fontSize: "30px", fontFamily: "Arial Black", letterSpacing: "-0.09cm", lineHeight: '30px', color: '#FFFFFF'}}>MARCO  CAROLA, VANJEE, GUSTA-VO</span>
            </p>
              <p><span className='rozsaszin' style={{fontWeight: "Bold", fontSize: "100px", fontFamily: "Arial Black", letterSpacing: "-9px", lineHeight: '30px'}}>#BPM THE END</span></p>
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
          <div className='col-sm-7'>
            <p style={{color: '#AC5675',lineHeight:'15px', textAlign:'center',fontFamily: "Arial Black",fontSize: '30px'}}>// EVENT COVER</p>
          </div>
      </div>
    </div>
            <img src={marco_esemeny_nagy} alt="marco" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default marco