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
                  <a href="/youtopia">
                    <img src={youtopia} alt="" />
                  </a>
                  <p></p>
              </div>
              <div className="col-sm-3">
                  <a href="/nice">
                    <img src={nice} alt="" />
                  </a>
              </div>
              <div className="col-sm-3">
                  <a href="/nofear">
                    <img src={nofear} alt="nofear" />
                  </a>
              </div>
              <div className="col-sm-3">
                  <a href="/blackmamba">
                    <img src={blackmamba} alt="" />
                  </a>
              </div>
          </div>
      </div>
      </>
  )
}

export default EsBel