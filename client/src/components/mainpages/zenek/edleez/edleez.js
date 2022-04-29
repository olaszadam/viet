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
    <div class="container">
    <div class="row">
        <div class="col-xs-6">
            <div class="big-box">
              <img src={edleez_page} alt="" />
              </div>
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