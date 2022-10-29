import React from 'react';
import NavegadorInterno from '../components/NavegadorInterno'
import Equipo from './Equipo';
import PreguntasFrecuentes from './PreguntasFrecuentes';

const Proyecto = () => {
  return (
    <div>
      <NavegadorInterno />
      <div className='text-center '> 
     <h1 className="mt-5">Proyecto</h1> 
     </div>
     <Equipo />
     <PreguntasFrecuentes />
      </div>
  )
}

export default Proyecto