import { Item } from './Item'
import React from 'react'
import './styles/ItemList.css'

const ItemList = () => {

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

const creacion = <div className="itemListContainer">{productos.map((producto) => 
                <Item nombre={producto.nombre} precio={producto.precio} tamaño={producto.tamaño} imgs={producto.imgs}></Item> 
                )}
                </div>


    return (
        <>
        {creacion}
        </>
    )
}

export default ItemList
