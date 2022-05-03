import React from 'react'
import nofear_nagy from './nofear_nagy.png'
import "../pages.css"

const nofear = () => {
  return (<>
    <div className='bg_kul'>
    <div className='container justify-content-center'>
        <div className='row'>
          <div className='col-sm-5 my-auto'>
            <div className='info'>
            <p><span className='szurke'>LINEUP</span><br></br> <span className='feher'>DJ IBON<br></br> MATRIARK<br></br> TECHNOKOOL<br></br> IN SILENCE<br></br> KAMAFAKA<br></br> AKÁC</span></p>
            <p><span className='szurke'>HELYSZÍN</span><br></br><span className='feher'> BOGDÁN UTCA 1-3<br></br> BUDAPEST</span></p>
            <p><span className='szurke'>JEGYÁRAK</span><br></br><span className='feher'> TIER 1 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - 3000 HUF<br></br>
            TIER 1 SIMA - 3500 HUF<br></br> TIER 2 <span className='rozsaszin'>/BOT KEDVEZMÉNNYEL/</span> - 4000 HUF<br></br>
            TIER 2 SIMA - 4500 HUF<br></br> HELYSZÍNEN - 5500 HUF</span></p>
            <p><span className='rozsaszin'>TÖBB INFÓ:<br></br>Facebook.com/events/868492047120377<br></br>
            FACEBOOK.COM/NOFEARTECHNO</span></p>
            </div>
          </div>
          <div className='col-sm-7'>
          <div className='container-flex' style={{textAlign: 'right'}}>
      <div className='row'>
        <div className='col-sm-12'>
          <p className='cimke'>
            <p>
              <span style={{fontWeight: "Bold", fontSize: "30px", fontFamily: "Arial Black", letterSpacing: "-0.09cm", lineHeight: '30px', color: '#FFFFFF'}}>DJ IBON, MATRIARK</span>
            </p>
              <p><span className='rozsaszin' style={{fontWeight: "Bold", fontSize: "100px", fontFamily: "Arial Black", letterSpacing: "-9px", lineHeight: '30px'}}>#NOFEAR</span></p>
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
          <div className='col-sm-7'>
            <p style={{color: '#AC5675',lineHeight:'15px', textAlign:'center',fontFamily: "Arial Black",fontSize: '30px'}}>// EVENT COVER</p>
          </div>
      </div>
    </div>
            <img src={nofear_nagy} alt="nofear" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default nofear