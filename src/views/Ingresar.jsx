

import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Ingresar = () => {

  const navigate = useNavigate();

  return (
    <div className='container text-center ml-5 mt-5 w-25'>
      <form className="form-group">
        <div className="form-group text-start">
          <div className=" mt-4">
            <label className=" mb-2">Correo Electrónico</label>
            <input type="mail"
              className="form-control"
              placeholder='name@example.com'

            />

          </div>

          <div className=" mt-4">
            <label className=" mb-2">Contraseña</label>
            <input type="pasword"
              className="form-control"

            />
          </div>
        </div>
        {/* Aquí usaré un link por mientras, hasta que haga el state y pueda usar navigate*/}
        <Link to='/novedades' >
          <Button type="submit" className='m-4'>Iniciar Sesión</Button>
        </Link>

      </form>

      <p>¿Aún no tienes tu cuenta?</p>

      <Button type="btn" className='m-4'
      onClick={() => navigate(`/registrarse`)}
       >Crear Cuenta</Button>

    </div>
  )
}

export default Ingresar