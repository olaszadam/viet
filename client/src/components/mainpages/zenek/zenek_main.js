import React from 'react'
import alliwant from './aiwaxx.png'

const zenek_main = () => {
  return (
    <>
      <div className='container'>
          <div className="row">
              <div className="col-sm-3">
                  <a href="/alliwant">
                    <img src={alliwant} alt="" />
                  </a>
                  <p></p>
              </div>
              <div className="col-sm-3">
                  <a href="/marco">
                    <img src={marco_esemeny} alt="" />
                  </a>
              </div>
              <div className="col-sm-3">
                  <a href="/chris">
                    <img src={chris_esemeny} alt="" />
                  </a>
              </div>
          </div>
      </div>
      </>
  )
}

export default zenek_main