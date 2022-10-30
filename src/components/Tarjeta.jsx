import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from "react-router-dom";


const Tarjeta = () => {

    const navigate = useNavigate();

    const { data } = useContext(DataContext);

    console.log('este es novedades')
    console.log({ data })


    return (

        <div >
            <div className="row row-cols-md-auto justify-content-center">
                {data.map(d =>
                    <Card className='m-2' style={{ width: '18rem' }}>
                        <Card.Title className="text-muted">{d.nombre}</Card.Title>
                        <Card.Img variant="top" src={d.img} />
                        <Card.Body>

                            <Card.Subtitle className="mb-2 text-muted">{d.proveedor}</Card.Subtitle>
                            <div className="row row-cols-md-auto justify-content-between">
                                <span
                                    style={{ color: 'rgb(221, 110, 66)' }}
                                    className='fs-4'
                                >${d.precio}</span>

                                <Button style={{ backgroundColor: 'rgb(192, 214, 223)', color: 'rgb(79, 109, 122)' }} 
                                size="sm"
                                onClick={() => navigate(`/tienda/detalles`)}>
                                    Más info</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )}
            </div>


        </div>

    )
}

export default Tarjeta