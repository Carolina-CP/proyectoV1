import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import imgCarrusel1 from '..//assets/img/imgCarrusel1.jpg'
import imgCarrusel2 from '..//assets/img/imgCarrusel2.jpg'
import imgCarrusel3 from '..//assets/img/imgCarrusel3.jpg'
import '..//assets/css/bienvenida.css'



const Bienvenida = () => {
  return (
    <div>
      <Carousel className="carrusel" >

        <Carousel.Item style={{height:'89vh'}}  className="carrusel-item" >
          <img
            className="img"
            src={imgCarrusel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item style={{height:'89vh'}}  className="carrusel-item" >
          <img
            className="img"
            src={imgCarrusel2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{height:'89vh'}}  className="carrusel-item" >
          <img
            className="img"
            src={imgCarrusel3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

    </div>
  )
}

export default Bienvenida