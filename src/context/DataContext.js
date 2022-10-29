import React, { createContext, useState } from "react";


export const DataContext = createContext();

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



export const DataProvider = ({ children }) => {

    const [data, setData] = useState(dataFixed);

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

