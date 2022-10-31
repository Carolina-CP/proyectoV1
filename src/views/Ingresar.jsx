
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const Ingresar = () => {

  const navigate = useNavigate();

  return (
    <div className='container text-center ml-5 mt-5 col-10 col-md-4'>
      <Form>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label>Coreo Electrónico</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" />
        </Form.Group>


        <Button className='m-4'
          onClick={() => navigate(`/novedades`)}
        >Ingresar</Button>
      </Form>

      <p>¿Aún no tienes tu cuenta?</p>

      <Button type="btn" className='m-4'
        onClick={() => navigate(`/registrarse`)}
      >Crear Cuenta</Button>


    </div>
  )
}

export default Ingresar