import React from 'react'
import petre from './petre.jpg';
import marco from './marco.png';
import chris from './chris.png';
import './main.css';



const Main = () => {
  return (
      <>
      <div id="demo" className="carousel slide" data-ride="carousel">

{/* Indicators */}
<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" className="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>

{/* The slideshow */}
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={petre} alt="petre" width="1100" height="500"/>
  </div>
  <div className="carousel-item">
    <img src={marco} alt="marco" width="1100" height="500"/>
  </div>
  <div className="carousel-item">
    <img src={chris} alt="chris" width="1100" height="500"/>
  </div>
</div>

{/* Left and right controls */}
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