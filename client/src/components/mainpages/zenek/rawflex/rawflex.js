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
    <div className="container">
    <div className="row">
        <div className="col-xs-6">
            <div className="big-box">
              <img src={rawflex_page} alt="" />
              </div>
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