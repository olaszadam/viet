import React from 'react'
import alliwant_page from "./aiwaxx.png"
import "../zene.css"
import wax1 from "./aiwwax005.png"
import wax2 from "./aiwwax007.png"
import wax3 from "./aiwwax008.png"
import wax4 from "./aiwwax010.png"
import getdown from "./getdown.png"
import jackinhammond from "./jackinhammond.png"
import letmetellyou from "./letmetellyou.png"
import goforbroke from "./goforbroke.png"

const alliwant = () => {
  return (
    <>
    <div className='background'>
    <div className='container' style={{textAlign: 'right'}}>
      <div className='row' >
        <div className='col-sm-12'>
          <p className='cimke'>
            <p>
              <span style={{fontWeight: "Bold", fontSize: "30px", fontFamily: "Arial Black", letterSpacing: "-0.09cm", lineHeight: '30px', color: '#FFFFFF'}}>EYE DEEP LEEZ REC.</span>
            </p>
              <p><span className='rozsaszin' style={{fontWeight: "Bold", fontSize: "100px", fontFamily: "Arial Black", letterSpacing: "-9px", lineHeight: '30px'}}>#ZENÉK/kiadók</span></p>
          </p>
        </div>
      </div>
    </div>
    <div class="container">
    <div class="row">
        <div class="fixed">
            <div class="big-box" style={{paddingTop: '50px'}}>
              <img src={alliwant_page} alt="" />
            </div>
            <p><span style={{textAlign:'justify',lineHeight: '15px', color:'white',letterSpacing:'-1px'}}>...A Club Korona után, a New DTD-ben  váltak üzemeltetőve és másutt is szerveztek
fesztiválokat, partikat Badgirls néven. Ezzel egyidőben indították el, a Magyar DJ Magazint. A kiadójuk több (House) ágazatot is lefedő arculatként indult, deep, tech, chicago és detroit house akárcsak a későbbre tervezett techno, a Black Series-en. Az AlliWant koncepciója a következő: ”A kiadónk azt a zenét szeretné bemutatni, amit mi is reprezentálunk a klubbokban, azt a zenét keressük ami megfog minket.” - akár djként, akár producerként -  Nem szeretnénk engedni a minőségből és nem szeretnénk egy száz plusz egyedik kiadó lenni sem a piacon. Hiszünk abban, hogy a jó zene megtalálja a közönségét. Ne feledd! AlliWant is just Music!</span></p>
        </div>
        <div class="col-xs-6">
          <div className='labels'>
            <div class="row">
                <div class="col-xs-6"><div class="mini-box"><img src={wax1} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={wax2} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={wax3} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={wax4} alt="" className='releases' /></div></div>     
            </div>
            <div class="row">
                <div class="col-xs-6"><div class="mini-box"><img src={getdown} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={jackinhammond} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={letmetellyou} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={goforbroke} alt="" className='releases' /></div></div>
            </div>
          </div>
        </div>
    </div>
</div>
    </div>
    </>
  )
}

export default alliwant