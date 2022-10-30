
import { useContext } from 'react'
import NavegadorInterno from '../components/NavegadorInterno'
import { DataContext } from '../context/DataContext';

import Tarjeta from '../components/Tarjeta';



const Novedades = () => {

  const { data } = useContext(DataContext);

  console.log('este es novedades')
  console.log({ data })


  return (
    <div>
      <NavegadorInterno />

      <div className="container my-4 justify-content-center">
          <Tarjeta />
    
      </div>


    </div>
  )
}

export default Novedades