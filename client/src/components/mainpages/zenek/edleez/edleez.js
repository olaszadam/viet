import React from 'react'
import vu1 from "./vu1.png"
import vu2 from "./vu2.png"
import vu3 from "./vu3.png"
import vu4 from "./vu4.png"
import khrist1 from "./khristiank1.png"
import khrist2 from "./khristiank2.png"
import khrist3 from "./khristiank3.png"
import khrist4 from "./khristiank4.png"
import edleez_page from "./edleez.png"
import "../zene.css"

const edleez = () => {
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
              <img src={edleez_page} alt="" />
            </div>
            <p><span style={{textAlign:'justify',lineHeight: '15px', color:'white',letterSpacing:'-1px'}}>A magyar Eye Deep Leez Recordings 2016-banindult hódító útjára a Bandcampen Udvari Viktor(Capeesh Society) és Kiss Krisztián (Khristian K) közös projektjeként. Szelekciójukat az ambient, aminimal és a Deep-Tech hangzás reprezentálja.Kiadójuk a szcénában hamar tett szert elismerésre.Viktor korai darabjai a minimal vonalán mozognak,hipnotikus dallamokkal, lüktető mélyekkel.Krisztián az ambient mellett, deep-tech darabokkal ünnepelteti meg a nagyérdeműt! Érdemes odafigyelni a Bandcamp oldalukra, aholmindig friss elektronikus zenei tartalmat találunk!</span></p>
        </div>
        <div class="col-xs-6">
          <div className='labels'>
            <div class="row">
                <div class="col-xs-6"><div class="mini-box"><img src={khrist1} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={khrist2} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={khrist3} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={khrist4} alt="" className='releases' /></div></div>
            </div>
            <div class="row">
                <div class="col-xs-6"><div class="mini-box"><img src={vu1} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={vu2} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={vu3} alt="" className='releases' /></div></div>
                <div class="col-xs-6"><div class="mini-box"><img src={vu4} alt="" className='releases' /></div></div>
            </div>
          </div>
        </div>
    </div>
</div>
    </div>
    </>
  )
}

export default edleez