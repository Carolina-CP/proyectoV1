import React, { useContext } from 'react';
import { DataContext} from '../context/DataContext';
import NavegadorInterno from '../components/NavegadorInterno'



const Novedades = () => {

  const {datos} = useContext(DataContext);

  console.log('este es novedades')
  console.log(datos)

  return (
    <div>
      <NavegadorInterno />

      <div>
         {datos.map((dato) => (
          <p>{dato.nombre}</p>
          
         ))}
         
      </div>
     
    </div>
  )
}

export default Novedades