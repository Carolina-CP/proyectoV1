import React, { useState, useEffect } from 'react';
import { createContext } from "react";

export const DataContext = createContext();

const dataUsuario = {
    mail: 'hola@hola.cl',
    contraseña: 'hola123'
}

const dataServicios = [{
    categoria: "graficas",
    id: 1,
    nombre: "Diseño de Currículo",
    proveedor: "Juan López",
    img: "https://img.remediosdigitales.com/b929f4/duncan_chapple_horizontal/450_1000.jpg",
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    favorito: false
}, {
    categoria: "psicologia",
    id: 2,
    nombre: "Preparación Entrevista Online",
    proveedor: "Anita González",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvk6dyS4bH0yJe45MSP_BvUvjMIEPecEvJTr4CCvEy3LcFpC_7oO3s5lMP71DB6ls2BU&usqp=CAU",
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    favorito: false
}, {
    categoria: "psicologia",
    id: 3,
    nombre: "Negociar mi sueldo en una entrevista de Trabajo",
    proveedor: "Anita González",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvk6dyS4bH0yJe45MSP_BvUvjMIEPecEvJTr4CCvEy3LcFpC_7oO3s5lMP71DB6ls2BU&usqp=CAU",
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    favorito: false
}
]



const DataProvider = ({ children }) => {

    // usestate para datos de usuario
    const [usuario, setUsuario] = useState(dataUsuario);

    // usestate para leer las publicaciones
    const [datos, setDatos] = useState([dataServicios]);

    const estadoGlobal = { usuario, setUsuario, datos, setDatos };

    // useeffect para llamar a la api de servicios
    useEffect(() => {
        consultarInformacion();
    }, []);



    const consultarInformacion = async () => {
        const respuesta = await fetch({ dataUsuario })
        const datos = await respuesta.json()
        setDatos(datos);
    }

    console.log(datos)

    return (
        <DataContext.Provider value={{ estadoGlobal }}>
            {children}
        </DataContext.Provider>
    )
}

export {DataProvider};

