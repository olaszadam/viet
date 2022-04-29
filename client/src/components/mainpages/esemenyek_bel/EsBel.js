import React from 'react'
import youtopia from './youtopia.png'
import nice from './nice002.png'
import nofear from './nofear.png'
import blackmamba from './blackmamba.png'
import "../pages.css"

const EsBel = () => {
  return (
      <>
      <div className='bg_es_bel_main'>
        <div className='container'>
          <div className="row">
              <div className="col-sm-3 mx-auto">
                  <a href="/youtopia">
                    <img src={youtopia} alt="" />
                  </a>
                  <p className='didzse'>
                    <span style={{color: "red"}}>SZOMBAT, JANUÁR 15.</span><br></br>ARZENAL <br></br>YOUTOPIA 003 - SPFDJ,FRANCOIS X & DINA<br></br>DJ's:<br></ br>SPFDJ<br></br>FRANCOIS X<br></br> DINA<br></br> SIKZTAH<br></br> DTNB.
                  </p>
              </div>
              <div className="col-sm-3 mx-auto">
                  <a href="/nice">
                    <img src={nice} alt="" />
                  </a>
                  <p  className='didzse'>
                  PÉNTEK, JANUÁR 14.<br></br> AETHER<br></br> NICE002 X TAECHNO<br></br> INDIRECT MOVEMENT,<br></br> MAKS<br></br> DJ's:<br></br> INDIRECT MOVEMENT<br></br> MAKS<br></br> OBWIGSZYH<br></br> DTNB. X MANU
                  </p>
              </div>
              <div className="col-sm-3 mx-auto">
                  <a href="/nofear">
                    <img src={nofear} alt="nofear" />
                  </a>
                  <p className='didzse'>
                    PÉNTEK, JANUÁR 14.<br></br> FLASHBACK<br></br> NOFEAR INVITES -<br></br> DJ IBON & MATRIARK<br></br> DJ's:<br></br> DJ IBON<br></br> MATRIARK<br></br> TECHNOKOOL<br></br> IN SILENCE<br></br> KAMAFAKA<br></br> AKÁC
                  </p>
              </div>
              <div className="col-sm-3 mx-auto">
                  <a href="/blackmamba">
                    <img src={blackmamba} alt="" />
                  </a>
                  <p className='didzse'>
                    PÉNTEK, JANUÁR 14.<br></br> AKVÁRIUM KLUB<br></br> BLACK MAMBA PRES.<br></br> SASHA<br></br> DJ's:<br></br> SASHA<br></br> SAMHAIN/LIVE<br></br> SECRET FACTORY
                  </p>
              </div>
          </div>
      </div>
      </div>
      </>
  )
}

export default EsBel