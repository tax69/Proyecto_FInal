
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import img_banner_1 from '../assets/Otr/1.jpg';
import img_banner_2 from '../assets/Otr/2.jpg';
import img_banner_3 from '../assets/Otr/3.jpg';
import  '../components/Otro.css';



const About = () => {

    return(
        <div className='todos1'>
  
  <div className="container animate__animated animate__bounce" style={{marginTop:0, marginBottom:10}}>
        
        <div id="carouselBasicExample" className="carousel slide carousel-fade" data-mdb-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  <div className="carousel-inner">

    <div className="carousel-item active">
      <img src={img_banner_1} className="d-block w-100" alt="Sunset Over the City"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src={img_banner_2} className="d-block w-100" alt="Canyon at Nigh"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src={img_banner_3} className="d-block w-100" alt="Cliff Above a Stormy Sea"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>


        </div>
    )
}
export default About