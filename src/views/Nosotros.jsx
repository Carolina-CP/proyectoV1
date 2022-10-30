import React from 'react';
import NavegadorInterno from '../components/NavegadorInterno'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';


const Nosotros = () => {
  return (

    <div>
      <NavegadorInterno />
      <div className="container mb-4 justify-content-center">


        <div className="container my-4 justify-content-center mt-4">
          <div className="row">
            <div className="col-sm-5 col-md-6">
              <Card.Header className=" border-bottom mb- fs-5"
                style={{ color: 'rgb(79, 109, 122)' }}>
                Quienes Somos</Card.Header>
              <Card.Body className="card-block ">

                <Card.Text className="card-text mt-4 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Card.Text>
              </Card.Body>
              <Card.Header className=" border-bottom mb-2 mt-4 fs-5"
                style={{ color: 'rgb(79, 109, 122)' }}>
                Nuestro Equipo</Card.Header>
              <Card.Body>



                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col text-center">
                    <img src="https://i.blogs.es/756ce7/ideas-para-hacer-retratos--diferentes-02/450_1000.jpg"
                      className="card-img-top"
                      alt="Juanito"
                      style={{ borderRadius: '50%', width: '7rem' }}
                    />
                    <span
                      style={{ color: 'rgb(221, 110, 66)' }}
                      className='fs-6 '
                    >Gonzalo González</span>
                  </div>

                  <div className="col text-center">
                    <img src="https://i.blogs.es/756ce7/ideas-para-hacer-retratos--diferentes-02/450_1000.jpg"
                      className="card-img-top"
                      alt="Juanito"
                      style={{ borderRadius: '50%', width: '7rem' }}
                    />
                    <span
                      style={{ color: 'rgb(221, 110, 66)' }}
                      className='fs-6 '
                    >Gonzalo González</span>
                  </div>

                  <div className="col text-center">
                    <img src="https://i.blogs.es/756ce7/ideas-para-hacer-retratos--diferentes-02/450_1000.jpg"
                      className="card-img-top"
                      alt="Juanito"
                      style={{ borderRadius: '50%', width: '7rem' }}
                    />
                    <span
                      style={{ color: 'rgb(221, 110, 66)' }}
                      className='fs-6 '
                    >Gonzalo González</span>
                  </div>


                </div>


              </Card.Body>

            </div>


            <div className="col-sm-5 col-md-6 mt-4">
              <Accordion defaultActiveKey="0">
                <Accordion.Item
                  className='bg-secondary' eventKey="0">
                  <Accordion.Header style={{ color: 'rgb(221, 110, 66)' }} >Contacto</Accordion.Header>
                  <Accordion.Body>
                    <>
                      <Form.Label htmlFor="inputPassword5">Nombre</Form.Label>
                      <Form.Control
                        className='mb-4'
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                      />
                      <Form.Label htmlFor="inputPassword5">Correo electrónico</Form.Label>
                      <Form.Control
                        className='mb-4'
                        type="mail"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                      />
                      <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>

                    </>
                  </Accordion.Body>
                  <Accordion.Body className='text-center'>


                    <div class="d-grid gap-2 col-6 mx-auto">
                      <button class="btn"
                        type="button"
                        style={{ backgroundColor: 'white', color: 'rgb(79, 109, 122)'}}>
                        Enviar</button>
                    </div>


                  </Accordion.Body>

                </Accordion.Item>



              </Accordion>
            </div>



          </div>

        </div>

      </div>
    </div>
  )
}

export default Nosotros