import { ItemCount } from './ItemCount';
import { ItemList } from './ItemList';
import { ItemDetailContainer } from './ItemDetailContainer';
import React, { useState, useEffect } from 'react'

const productos = [
    {
        id: 1,
        nombre: "Pino tallado con suculentas",
        precio: "35 USD",
        tamaño: "65cm x 15cm",
        imgs: "",

    },
    {
        id: 2,
        nombre: "Jade Golum",
        precio: "4 USD",
        tamaño: "10cm x 5cm",
        imgs: "",

    },
    {
        id: 3,
        nombre: "Bonsai Pino Espinoso",
        precio: "45 USD",
        tamaño: "45cm x 50cm",
        imgs: "",

    },
    {
        id: 4,
        nombre: "Bonsai Pino Estrella",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        imgs: "",

    }
]

const itemCreation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(productos)

            , 2000);

    })
}


export const ItemListContainer = () => {


    const [itemC, setItemC] = useState([])

    const passArray = () => {
        itemCreation().then(
            listData => { setItemC(listData) })
    }

    useEffect(() => {
        passArray();
    }, [])


    return (
        <>
            <div><ItemList pr={itemC}></ItemList></div>
            <div><ItemDetailContainer></ItemDetailContainer></div>
        </>

    )
}


