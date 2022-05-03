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
      <div className='container' style={{textAlign: 'right'}}>
      <div className='row' >
        <div className='col-sm-12'>
          <p className='cimke'>
            <p>
              <span style={{fontWeight: "Bold", fontSize: "30px", fontFamily: "Arial Black", letterSpacing: "-0.09cm", lineHeight: '30px', color: '#FFFFFF'}}>SORON KÖVETKEZŐ</span>
            </p>
              <p><span className='rozsaszin' style={{fontWeight: "Bold", fontSize: "100px", fontFamily: "Arial Black", letterSpacing: "-9px", lineHeight: '30px'}}>#ESEMÉNYEK</span></p>
          </p>
        </div>
      </div>
      <div className='row justify-content-center'>
          <div className='col-sm-6'>
            <p style={{color: '#AC5675',lineHeight:'15px', textAlign:'center',fontFamily: "Arial Black",fontSize: '30px'}}>// KIEMELT RENDEZVÉNYEK</p>
          </div>
      </div>
    </div>
        <div className='container'>
          <div className="row">
              <div className="col-sm-3 mx-auto">
                  <a href="/youtopia">
                    <img src={youtopia} alt="" />
                  </a>
                  <p className='didzse'>
                    <span className='feher'>SZOMBAT, JANUÁR 15.<br></br>ARZENAL </span><br></br><span className='feher-vastag'>YOUTOPIA 003 - SPFDJ,FRANCOIS X & DINA</span><br></br><span className='feher'>DJ's:<br></ br>SPFDJ<br></br>FRANCOIS X<br></br> DINA<br></br> SIKZTAH<br></br> DTNB.</span>
                  </p>
              </div>
              <div className="col-sm-3 mx-auto">
                  <a href="/nice">
                    <img src={nice} alt="" />
                  </a>
                  <p  className='didzse'>
                  <span className='feher'>PÉNTEK, JANUÁR 14.<br></br> AETHER</span><br></br><span className='feher-vastag'> NICE002 X TAECHNO<br></br> INDIRECT MOVEMENT,<br></br> MAKS</span><br></br><span className='feher'> DJ's:<br></br> INDIRECT MOVEMENT<br></br> MAKS<br></br> OBWIGSZYH<br></br> DTNB. X MANU</span>
                  </p>
              </div>
              <div className="col-sm-3 mx-auto">
                  <a href="/nofear">
                    <img src={nofear} alt="nofear" />
                  </a>
                  <p className='didzse'>
                  <span className='feher'>PÉNTEK, JANUÁR 14.<br></br> FLASHBACK</span><br></br><span className='feher-vastag'> NOFEAR INVITES -<br></br> DJ IBON & MATRIARK</span><br></br><span className='feher'> DJ's:<br></br> DJ IBON<br></br> MATRIARK<br></br> TECHNOKOOL<br></br> IN SILENCE<br></br> KAMAFAKA<br></br> AKÁC</span>
                  </p>
              </div>
              <div className="col-sm-3 mx-auto">
                  <a href="/blackmamba">
                    <img src={blackmamba} alt="" />
                  </a>
                  <p className='didzse'>
                  <span className='feher'>PÉNTEK, JANUÁR 14.<br></br> AKVÁRIUM KLUB</span><br></br> <span className='feher-vastag'>BLACK MAMBA PRES.<br></br> SASHA</span><br></br> <span className='feher'>DJ's:<br></br> SASHA<br></br> SAMHAIN/LIVE<br></br> SECRET FACTORY</span>
                  </p>
              </div>
          </div>
      </div>
      </div>
      </>
  )
}

export default EsBel