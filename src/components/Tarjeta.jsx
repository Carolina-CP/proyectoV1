import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';


const Tarjeta = () => {

    const { data } = useContext(DataContext);
  
    console.log('este es novedades')
    console.log({ data })
  
  
    return (
     
        <div >
          <div className="row row-cols-md-auto justify-content-center">
            {data.map(d =>
              <Card className='m-2' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={d.img} />
                <Card.Body>
                  <Card.Title>{d.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{d.proveedor}</Card.Subtitle>
                  <Card.Text>
                    {d.descripcion}
                  </Card.Text>
                  <Button variant="primary">Más info</Button>
                </Card.Body>
              </Card>
            )}
          </div>
  
  
        </div>
  
    )
  }
  
  export default Tarjeta