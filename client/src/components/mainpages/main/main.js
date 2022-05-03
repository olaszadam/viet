import React from 'react'
import marco from './MARCOCAROLA.png';
import petre_proba from './petre_main_proba.png';
import chris from './CHRISSTUSSY.png';
import petre_nagy from './petre_esemeny_nagy.png'
import chris_nagy from './chris_esemeny_nagy.png'
import marco_nagy from './marco_esemeny_nagy.png'
import './main.css';
import '../pages.css';



const Main = () => {
  return (
      <>
      <div id="demo" className="carousel slide" data-ride="carousel">

<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" className="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={petre_proba} alt="petre" width="1100" height="500"/>
    <div className='kep'>
    <img src={petre_nagy} alt='petre'/>
    </div>
  </div>
  <div className="carousel-item">
    <img src={marco} alt="marco" width="1100" height="500"/>
    <div className='kep'>
    <img src={marco_nagy} alt='marco'/>
    </div>
  </div>
  <div className="carousel-item">
    <img src={chris} alt="chris" width="1100" height="500"/>
    <div className='kep'>
    <img src={chris_nagy} alt='chris'/>
    </div>
  </div>
</div>

<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>
</div>
      </>
  )
}

export default Main;