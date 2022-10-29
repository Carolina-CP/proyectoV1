import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Home from './Home';
import imgCarrusel1 from '..//assets/img/imgCarrusel1.jpg'
import imgCarrusel2 from '..//assets/img/imgCarrusel2.jpg'
import imgCarrusel3 from '..//assets/img/imgCarrusel3.jpg'



const Bienvenida = () => {
  return (
    <div>
      <Carousel  variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgCarrusel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgCarrusel2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgCarrusel3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default Bienvenida