import React from 'react'
import chris_esemeny_nagy from "./chris_esemeny_nagy.png"
import "../pages.css"

const chris = () => {
  return (
    <div className='bg_kul'>
      <div className='container justify-content-center'>
        <div className='row'>
          <div className='col-sm-5 my-auto'>
            <div className='info'>
            <p><span className='szurke'>LINEUP</span><br></br><span className='feher'> CHRIS STUSSY<br></br>LUUK VAN DIJK<br></br> JOEY DANIEL<br></br> PRUNK<br></br> OLIVIER WEITER<br></br> MISS MELERA</span></p>
            <p><span className='szurke'>HELYSZÍN</span><br></br><span className='feher'> MEERPARK<br></br>AMSTERDAM</span></p>
            <p><span className='szurke'>JEGYÁRAK</span><br></br><span className='feher'> TIER 1 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - €8<br></br> 
            TIER 1 SIMA - €10<br></br>TIER 2 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - €12<br></br> 
            TIER 2 SIMA - €14<br></br>HELYSZÍNEN - €16 </span> </p>
            <p><span className='rozsaszin'>TÖBB INFÓ:<br></br>FACEBOOK.COM/EVENTS/868492047120377
            FACEBOOK.COM/BLACKMAMBAPRODUCTION</span></p>
            </div>
          </div>
          <div className='col-sm-7'>
          <div className='container-flex' style={{textAlign: 'right'}}>
      <div className='row'>
        <div className='col-sm-12'>
          <p className='cimke'>
            <p>
              <span style={{fontWeight: "Bold", fontSize: "30px", fontFamily: "Arial Black", letterSpacing: "-0.09cm", lineHeight: '30px', color: '#FFFFFF'}}>CHRIS STUSSY, LUUK VAN DIJKW, PRUNK</span>
            </p>
              <p><span className='rozsaszin' style={{fontWeight: "Bold", fontSize: "100px", fontFamily: "Arial Black", letterSpacing: "-9px", lineHeight: '30px'}}>#LOVELAND</span></p>
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
          <div className='col-sm-7'>
            <p style={{color: '#AC5675',lineHeight:'15px', textAlign:'center',fontFamily: "Arial Black",fontSize: '30px'}}>// EVENT COVER</p>
          </div>
      </div>
    </div>
            <img src={chris_esemeny_nagy} alt="chris" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default chris