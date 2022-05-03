import React from 'react'
import "../zene.css"
import rawflex_page from "./rawflex.png"
import hunrel1 from "./hunrel1.png"
import hunrel2 from "./hunrel2.png"
import hunrel3 from "./hunrel3.png"
import hunrel4 from "./hunrel4.png"
import international1 from "./international1.png"
import international2 from "./international2.png"
import international3 from "./international3.png"
import international4 from "./international4.png"

const rawflex = () => {
  return (
    <>
    <div className='background'>
    <div className='container' style={{textAlign: 'right'}}>
      <div className='row' >
        <div className='col-sm-12'>
          <p className='cimke'>
            <p>
              <span style={{fontWeight: "Bold", fontSize: "30px", fontFamily: "Arial Black", letterSpacing: "-0.09cm", lineHeight: '30px', color: '#FFFFFF'}}>RAWFLEX MUSIC</span>
            </p>
              <p><span className='rozsaszin' style={{fontWeight: "Bold", fontSize: "100px", fontFamily: "Arial Black", letterSpacing: "-9px", lineHeight: '30px'}}>#ZENÉK/kiadók</span></p>
          </p>
        </div>
      </div>
    </div>
    <div className="container">
    <div className="row">
    <div class="fixed">
            <div class="big-box" style={{paddingTop: '50px'}}>
              <img src={rawflex_page} alt="" />
            </div>
            <p><span style={{textAlign:'justify',lineHeight: '15px', color:'white',letterSpacing:'-1px'}}>A Rawflex Music, egy új Magyar illetőségű Techno Label, amelynek alapítói Benyeda László (Shabaam) és Ivanics Gyula (Deep Colors) 
A kiadó 2018-ban indult hódító útjára, ami azóta is töretlen sikerrel tart!Első megjelenésük igen erős külföldi supportot kapott, így az ugródeszka után első ízben hazai, majd később külhoni Artistokkal együttműködve az egyik Top Techno kiadóvá vált hamar!Stílusukban a Peaktime/Driving vonalat erősítik, némi  Acid elemmel ellátva. Bátran állíthatjuk, a Rawflex kiadó háza táján, igazi bombák születnek! </span></p>
        </div>
        <div className="col-xs-6">
          <div className='labels'>
            <div className="row">
                <div className="col-xs-6"><div className="mini-box"><img src={hunrel1} alt="" className='releases' /></div></div>
                <div className="col-xs-6"><div className="mini-box"><img src={hunrel2} alt="" className='releases' /></div></div>
                <div className="col-xs-6"><div className="mini-box"><img src={hunrel3} alt="" className='releases' /></div></div>
                <div className="col-xs-6"><div className="mini-box"><img src={hunrel4} alt="" className='releases' /></div></div>
            </div>
            <div className="row">
                <div className="col-xs-6"><div className="mini-box"><img src={international1} alt="" className='releases' /></div></div>
                <div className="col-xs-6"><div className="mini-box"><img src={international2} alt="" className='releases' /></div></div>
                <div className="col-xs-6"><div className="mini-box"><img src={international3} alt="" className='releases' /></div></div>
                <div className="col-xs-6"><div className="mini-box"><img src={international4} alt="" className='releases' /></div></div>
            </div>
          </div>
        </div>
    </div>
</div>
    </div>
    </>
  )
}

export default rawflex