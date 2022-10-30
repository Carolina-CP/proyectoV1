import React, { createContext, useState, useEffect } from "react";



export const DataContext = createContext();

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

