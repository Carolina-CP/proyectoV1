import React from 'react';
import NavegadorInterno from '../components/NavegadorInterno';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";


const MiPerfil = () => {

  const navigate = useNavigate();

  return (

    <div>
      <NavegadorInterno />
      <div className="container mb-4 justify-content-center">


        <div className="container my-4 justify-content-center mt-4">
          <div className="row">
            <div className="col-sm-5 col-md-6">
              <Form>
                <Row className="mb-3">

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select defaultValue="Elige">
                      <option>Diseño Gráfico</option>
                      <option>Psicología</option>
                      <option>Coaching</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Formato</Form.Label>
                    <Form.Select defaultValue="Elige">
                      <option>On Line</option>
                      <option>Presencial</option>
                    </Form.Select>
                  </Form.Group>


                </Row>

                <Form.Group className="mb-3" >
                  <Form.Label>Nombre del Servicio</Form.Label>
                  <Form.Control placeholder="Ej: diseño de currículo" />
                </Form.Group>

                <Row className="mb-3">

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Duración</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Formato</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>

                <Form.Group className="" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <div class="d-grid gap-2 col-6 mx-auto mt-4">
                <button class="btn btn-primary"
                  type="button"
                  style={{ backgroundColor: 'rgb(221, 110, 66)', color: 'white', border: 'none' }}
                  onClick={() => navigate(`/novedades`)}>
                 Publicar</button>
              </div>

              </Form>

            </div>

            <div className="col-sm-5 col-md-6 d-flex align-items-center justify-content-center">
              aquí se verá la publicación
            </div>

          </div>
        </div>


      </div>

    </div>
  )
}

export default MiPerfil