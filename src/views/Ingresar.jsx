import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Ingresar = () => {

  const { datosUsuario, setDatosUsuario } = useContext(DataContext);

  const validarInput = (e) =>{
    e.preventDefault()

 if (datosUsuario === nutri) {
  alert ('linda')
 } else {
  alert('cuecs')
 }


  }
  console.log(datosUsuario)

  return (
    <div className='container text-center ml-5 mt-5 w-25'>
      <form className="form-group">
        <div className="form-group text-start">
          <div className=" mt-4">
            <label className=" mb-2">Correo Electrónico</label>
            <input type="mail"
              className="form-control"
              placeholder='name@example.com'
              onChange={(e) => setDatosUsuario(e.target.value)}
            />

          </div>

          <div className=" mt-4">
            <label className=" mb-2">Contraseña</label>
            <input type="pasword"
              className="form-control"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
        </div>
        {/* Aquí usaré un link por mientras, hasta que haga el state y pueda usar navigate*/}
        <Link to='/novedades' >
          <Button type="submit" className='m-4'>Iniciar Sesión</Button>
        </Link>

      </form>

      <p>¿Aún no tienes tu cuenta?</p>

      <Button type="btn" className='m-4' >Crear Cuenta</Button>

    </div>
  )
}

export default Ingresar