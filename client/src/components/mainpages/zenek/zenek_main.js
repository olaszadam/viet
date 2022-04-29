import React from 'react'
import alliwant_main from './alliwant/aiwaxx.png'
import edleez_main from './edleez/edleez.png'
import rawflex_main from './rawflex/rawflex.png'

const zenek_main = () => {
  return (
    <>
    <div className='background_main'>
    <div className='container'>
        <div className="row">
            <div className="col-sm-3 mx-auto">
                <a href="/alliwant/alliwant">
                  <img src={alliwant_main} alt="" />
                </a>
                <p className='didzse'>
                MAGYAR TECH ÉS DEEP<br></br>LABEL<br></br>ALLIWANT MUSIC -<br></br>ALLIWANT WAX<br></br> BIO':<br></br>Az AlliWant Records egy Magyar<br></br> Label, a legendás keceli Club Korona<br></br> csapatától! (James Cole, Pat Duff,<br></br>Shabaam).<br></br> Első megjelenés 2015<br></br>#ALLIWANTMUSIC
                </p>
            </div>
            <div className="col-sm-3 mx-auto">
                <a href="/edleez/edleez">
                  <img src={edleez_main} alt="" />
                </a>
                <p className='didzse'>
                MAGYAR ROMINIMAL ÉS <br></br> AMBIENT LABEL<br></br> EYE DEEP LEEZ<br></br> RECORDING<br></br> BIO':<br></br>Független Magyar mikrokiadó Viktor Udvari<br></br> és Khristian K' kezelésében, hangzásuk igen<br></br> sokrétű. Első megjelenés 2017<br></br> #EYEDEEPLEEZRECORDINGS
                </p>
            </div>
            <div className="col-sm-3 mx-auto">
                <a href="/rawflex/rawflex">
                  <img src={rawflex_main} alt="" />
                </a>
                <p className='didzse'>
                MAGYAR PEAKTIME TECHNO <br></br> LABEL <br></br>RAWFLEX MUSIC<br></br> BIO':<br></br> A Rawflex Music egy új Magyar Techno kiadó, amely 2018 őszén indult útjára! A két alapító tag, Shabaam és Deep<br></br> Colors!<br></br> Első megjelenés 2018<br></br> #RAWFLEXMUSIC
                </p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default zenek_main