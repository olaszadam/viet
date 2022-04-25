import React from 'react'
import chris_esemeny from "./chris_esemeny"

const EsKul = () => {
  return (
    <>
      <div className='container'>
          <div className="row">
              <div className="col-sm-3">
                  <a href="/petre">
                    <img src={petre_esemeny} alt="" />
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
                    <img src={chris_esemeny} alt="chris_esemeny" />
                  </a>
              </div>
          </div>
      </div>
      </>
  )
}

export default EsKul