import React from 'react'
import chris_esemeny from "./chris_esemeny.png"
import marco_esemeny from "./marco_esemeny.png"
import petre_esemeny from "./petre_esemeny.png"
import "../pages.css"

const EsKul = () => {
  return (
    <>
    <div className='bg_es_kul_main'>
      <div className='container'>
          <div className="row">
              <div className="col-sm-3 mx-auto">
                  <a href="/petre">
                    <img src={petre_esemeny} alt="" />
                  </a>
                  <p className='didzse'>
                  SZOMBAT, FEBRUÁR 19.<br></br>FORREST BUSINESS PARK<br></br>ZEBRA NIGHT SHOW -<br></br>LONDON<br></br> DJ's:<br></br>PETRE INSPIRESCU<br></br>WARREN ANTHONY<br></br> SEBASTIAN ERI<br></br> TED AMBER b2b RARESH<br></br>PE DANT b2b HRISQ<br></br>CAP b2b SUCIU
                  </p>
              </div>
              <div className="col-sm-3 mx-auto">
                  <a href="/marco">
                    <img src={marco_esemeny} alt="" />
                  </a>
                  <p className='didzse'>
                    KEDD, JANUÁR 18. <br></br>DREAM CATCHER AT THE JGL<br></br>THIS IS THE END<br></br>THE BPM FESTIVAL CR.<br></br>MARCO CAROLA<br></br>DJ's:<br></br>MARCO CAROLA<br></br>VANJEE<br></br>GUSTA-VO
                  </p>
              </div>
              <div className="col-sm-3 mx-auto">
                  <a href="/chris">
                    <img src={chris_esemeny} alt="chris_esemeny" />
                  </a>
                  <p className='didzse'>
                    SZERDA, ÁPRILIS 27. <br></br>MEERPARK<br></br>LOVELAND FESTIVAL -<br></br>VAN ORANJE<br></br>DJ's:<br></br>CHRIS STUSSY<br></br>LUUK VAN DIJK<br></br> JOEY DANIEL <br></br> PRUNK<br></br>OLIVIER WEITER<br></br>MISS MELERA
                  </p>
              </div>
          </div>
      </div>
    </div>
      </>
  )
}

export default EsKul