import { ItemCount } from './ItemCount';
import { ItemList } from './ItemList';
import { ItemDetailContainer } from './ItemDetailContainer';
import React, { useState, useEffect } from 'react'
import one from '../../../assets/1.JPG'
import two from '../../../assets/2.JPG'
import three from '../../../assets/3.jpg'
import four from '../../../assets/4.jpg'
import five from '../../../assets/5.jpg'
import six from '../../../assets/6.jpg'
import seven from '../../../assets/7.jpg'
import eight from '../../../assets/8.jpg'
import nine from '../../../assets/9.jpg'
import ten from '../../../assets/10.jpg'


const productos = [
    {
        id: 1,
        nombre: "Pino tallado con suculentas",
        precio: "35 USD",
        tamaño: "65cm x 15cm",
        imgs: one

    },
    {
        id: 2,
        nombre: "Jade Golum",
        precio: "4 USD",
        tamaño: "10cm x 5cm",
        imgs: two,

    },
    {
        id: 3,
        nombre: "Bonsai Pino Espinoso",
        precio: "45 USD",
        tamaño: "45cm x 50cm",
        imgs: three,

    },
    {
        id: 4,
        nombre: "Bonsai Pino Estrella",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        imgs: four,

    },
    {
        id: 5,
        nombre: "Bonsai Pino Estrella",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        imgs: five,

    },
    {
        id: 6,
        nombre: "Pino tallado con suculentas",
        precio: "35 USD",
        tamaño: "65cm x 15cm",
        descripcion: "asd",
        imgs: six,

    },
    {
        id: 7,
        nombre: "Jade Golum",
        precio: "4 USD",
        tamaño: "10cm x 5cm",
        descripcion: "asd",
        imgs: seven,

    },
    {
        id: 8,
        nombre: "Bonsai Pino Espinoso",
        precio: "45 USD",
        tamaño: "45cm x 50cm",
        descripcion: "asd",
        imgs: eight,

    },
    {
        id: 9,
        nombre: "Bonsai Pino Estrella",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        descripcion: "asd",
        imgs: nine,

    },
    {
        id: 10,
        nombre: "Bonsai Pino Estrella",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        descripcion: "asd",
        imgs: ten,

    },
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

        </>

    )
}

