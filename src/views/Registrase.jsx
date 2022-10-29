import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const Registrase = () => {
  return (
    <div className='container text-center ml-5 mt-5 w-25'>
      <form className="form-group">
<div className='text-start'> 
        <div className=" mt-4">
          <label className=" mb-2">Nombre</label>
          <input type="text"
            className="form-control"/>
        </div>

        <div className=" mt-4">
          <label className=" mb-2">Apellido</label>
          <input type="text"
            className="form-control"/>
        </div>

        <div className=" mt-4">
          <label className=" mb-2">Correo Electrónico</label>
          <input type="mail"
            className="form-control"
            placeholder='name@example.com' />
        </div>

        <div className=" mt-4">
          <label className=" mb-2">Contraseña</label>
          <input type="pasword"
            className="form-control"/>
        </div>
</div>
        <Button type="submit" className='m-4'>Crear Cuenta</Button>
      </form>
    </div>
  )
}

export default Registrase