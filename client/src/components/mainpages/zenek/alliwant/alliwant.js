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
    <div class="container">
    <div class="row">
        <div class="col-xs-6">
            <div class="big-box">
              <img src={alliwant_page} alt="" />
              </div>
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