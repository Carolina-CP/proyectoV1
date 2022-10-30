import React from 'react'
import { useContext } from "react";
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import NavegadorInterno from '../components/NavegadorInterno';
import { DataContext } from '../context/DataContext';
import FormularioCategorias from '../components/FormularioCategorias';

const Detalles = () => {

    const { nombre } = useParams();


    const { data } = useContext(DataContext);
    console.log('bandera detalles')
    console.log(data[0].nombre)

    return (
        
<div> 
 <NavegadorInterno />
        <div className="container mb-4 justify-content-center">
           
            <FormularioCategorias />
  

            <div className="container my-4 justify-content-center mt-4">
                <div className="row">
                    <div className="col-sm-5 col-md-6">
                        <Card.Header className=" border-bottom mb-2" >{data[0].categoria}</Card.Header>
                        <Card.Body className="card-block ">

                            <Card.Title style={{ color: 'rgb(79, 109, 122)' }} className=" mt-4 fs-3">{data[0].nombre}</Card.Title>
                            <Card.Title className="mb-2 text-muted">{data[0].proveedor}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{data[0].profesion}</Card.Subtitle>
                            <Card.Text className="card-text mt-4">{data[0].descripcion}</Card.Text>
                        </Card.Body>
                        <Card.Body className='mt-3 text-center'>
                            <span
                                style={{ color: 'rgb(221, 110, 66)' }}
                                className='fs-3 '
                            > ${data[0].precio}</span>
                        </Card.Body>
                        <Card.Body className="d-grid gap-2 mt-4">
                            <Button variant="secondary" size="lg">Comprar</Button>
                        </Card.Body>
                    </div>


                    <div className="col-sm-5 col-md-6 mt-4">
                        <img className="card-img" src={data[0].img} alt={data[0].nombre} />
                        <div className="card-img-overlay">
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </div>
    )
}

export default Detalles