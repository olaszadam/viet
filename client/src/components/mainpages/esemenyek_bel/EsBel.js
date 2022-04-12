import React from 'react'
import youtopia from './youtopia.png'
import nice from './nice002.png'
import nofear from './nofear.png'
import blackmamba from './blackmamba.png'

const EsBel = () => {
  return (
      <>
      <div className='container'>
          <div className="row">
              <div className="col-sm-3">
                  <a href='./youtopia.js'>
                    <img src={youtopia} alt="" />
                  </a>
              </div>
              <div className="col-sm-3">
                  <a href="">
                    <img src={nice} alt="" />
                  </a>
              </div>
              <div className="col-sm-3">
                  <a href="">
                    <img src={nofear} alt="" />
                  </a>
              </div>
              <div className="col-sm-3">
                  <a href="">
                    <img src={blackmamba} alt="" />
                  </a>
              </div>
          </div>
      </div>
      
      </>
  )
}

export default EsBel