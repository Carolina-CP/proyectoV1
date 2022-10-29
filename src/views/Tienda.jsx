
import { useContext } from 'react'
import NavegadorInterno from '../components/NavegadorInterno'
import { DataContext } from '../context/DataContext';

import Tarjeta from '../components/Tarjeta';

import FormularioCategorias from '../components/FormularioCategorias';



const Tienda = () => {

  const { data } = useContext(DataContext);

  console.log('este es novedades')
  console.log({ data })


  return (
    <div>
      <NavegadorInterno />

      <div className="container my-4 justify-content-center">
        <div> 
          <FormularioCategorias />
       
        </div>
          <Tarjeta />
    
      </div>


    </div>
  )
}

export default Tienda