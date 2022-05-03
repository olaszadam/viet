import React from 'react'
import chris_esemeny from "./chris_esemeny.png"
import marco_esemeny from "./marco_esemeny.png"
import petre_esemeny from "./petre_esemeny.png"
import "../pages.css"

const EsKul = () => {
  return (
    <>
    <div className='bg_es_kul_main'>
    <div className='container' style={{textAlign: 'right'}}>
      <div className='row'>
        <div className='col-sm-12'>
          <p className='cimke'>
            <p>
              <span style={{fontWeight: "Bold", fontSize: "30px", fontFamily: "Arial Black", letterSpacing: "-0.09cm", lineHeight: '30px', color: '#FFFFFF'}}>SORON KÖVETKEZŐ</span>
            </p>
              <p><span className='rozsaszin' style={{fontWeight: "Bold", fontSize: "100px", fontFamily: "Arial Black", letterSpacing: "-9px", lineHeight: '30px'}}>#ESEMÉNYEK</span></p>
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
          <div className='col-sm-6'>
            <p style={{color: '#AC5675',lineHeight:'15px', textAlign:'center',fontFamily: "Arial Black",fontSize: '30px'}}>// KIEMELT RENDEZVÉNYEK</p>
          </div>
      </div>
    </div>
      <div className='container'>
          <div className="row">
              <div className="col-sm-3 mx-auto">
                  <a href="/petre">
                    <img src={petre_esemeny} alt="" />
                  </a>
                  <p className='didzse'>
                    <span className='feher'>
                  SZOMBAT, FEBRUÁR 19.<br></br>FORREST BUSINESS PARK<br></br></span><span className='feher-vastag'>ZEBRA NIGHT SHOW -<br></br>LONDON</span><span className='feher'><br></br> DJ's:<br></br>PETRE INSPIRESCU<br></br>WARREN ANTHONY<br></br> SEBASTIAN ERI<br></br> TED AMBER b2b RARESH<br></br>PE DANT b2b HRISQ<br></br>CAP b2b SUCIU
                  </span></p>
              </div>
              <div className="col-sm-3 mx-auto">
                  <a href="/marco">
                    <img src={marco_esemeny} alt="" />
                  </a>
                  <p className='didzse'>
                  <span className='feher'>KEDD, JANUÁR 18. <br></br>DREAM CATCHER AT THE JGL</span><br></br><span className='feher-vastag'>THIS IS THE END<br></br>THE BPM FESTIVAL CR.<br></br>MARCO CAROLA</span><br></br><span className='feher'>DJ's:<br></br>MARCO CAROLA<br></br>VANJEE<br></br>GUSTA-VO
                  </span></p>
              </div>
              <div className="col-sm-3 mx-auto">
                  <a href="/chris">
                    <img src={chris_esemeny} alt="chris_esemeny" />
                  </a>
                  <p className='didzse'>
                  <span className='feher'>SZERDA, ÁPRILIS 27. <br></br>MEERPARK</span><br></br><span className='feher-vastag'>LOVELAND FESTIVAL -<br></br>VAN ORANJE</span><br></br><span className='feher'>DJ's:<br></br>CHRIS STUSSY<br></br>LUUK VAN DIJK<br></br> JOEY DANIEL <br></br> PRUNK<br></br>OLIVIER WEITER<br></br>MISS MELERA
                  </span></p>
              </div>
          </div>
      </div>
    </div>
      </>
  )
}

export default EsKul