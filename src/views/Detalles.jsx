import React from 'react'
import { useContext } from "react";
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const Detalles = () => {

  const { id } = useParams();


  const { data } = useContext(DataContext);

  const elemento = data.filter((e) => e.id === id)
  console.log(elemento)


  return (

    <div className="container m-4 mx-auto">
      <div class="card flex-row row-cols-md-auto">

        <img class="card-img-left example-card-img-responsive" alt={elemento[0].nombre}
          src={elemento[0].img} /> 

        <div class="card-body">
          <div class="card-title h5 h4-sm text-start text-capitalize"><h2>{elemento[0].nombre}</h2></div>
          <p class="card-text text-start">{elemento[0].descripcion}</p>

          <ul className="text-start border-top ">
            <h4 className="text-secondary text-start m-4">Ingredientes:</h4>
            {elemento[0].ingredients.map((i) => (
              <li className="list-group-item">🍕  {i}</li>
            ))}
          </ul>

          <div className="row">
            <h4 className="text-danger"> ${elemento[0].precio}</h4>
            <button className="btn btn-danger m-2" onClick={() => console.log(elemento[0].id)}>Añadir 🛒</button>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Detalles