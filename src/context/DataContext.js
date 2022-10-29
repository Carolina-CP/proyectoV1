import React, { createContext, useState, useEffect } from "react";



export const DataContext = createContext();
/*
const dataFixed = [{
    categoria: "graficas",
    id: 1,
    nombre: "Diseño de Currículo",
    proveedor: "Juan López",
    img: "https://img.remediosdigitales.com/b929f4/duncan_chapple_horizontal/450_1000.jpg", ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    descripcion: 'Este curso bla bla bla, y mucho mas bla bla bla',
    favorito: false
},
{
    categoria: "Ñaña",
    id: 1,
    nombre: "Otra cosa",
    proveedor: "Anita",
    img: "https://img.remediosdigitales.com/b929f4/duncan_chapple_horizontal/450_1000.jpg", ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    descripcion: 'Este curso bla bla bla, y mucho mas bla bla bla',
    favorito: false
}]

*/

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    // useeffect para llamar a la api de servicios    
    useEffect(() => {
        consultarInformacion1();
    }, []);


    const consultarInformacion1 = async () => {
        const endpoint = '../../public/pizzas.json'
        const respuesta = await fetch(endpoint);
        const data = await respuesta.json();
        setData(data)
    }

    console.log(data)

     
  useEffect(() => {
    consultarInformacion();
}, []);


const consultarInformacion = async () => {

    const response = await fetch('./pizzas.json')
    const data = await response.json()
    setData(data);
}

console.log(data)


    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

