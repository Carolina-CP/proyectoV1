import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const Registrase = () => {

  const navigate = useNavigate();

  return (
    <div className='container text-center ml-5 mt-5 col-10 col-md-4'>

<h5>Crea una cuenta hoy y mejora tus opciones laborales</h5>

      <Form>
        <Form.Group className="mb-3 text-start" >
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3 text-start" >
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Coreo Electrónico</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" />
        </Form.Group>


        <Button className='m-4'
          onClick={() => navigate(`/ingresar`)}
        >Crear Cuenta</Button>
      </Form>

    </div>
  )
}

export default Registrase