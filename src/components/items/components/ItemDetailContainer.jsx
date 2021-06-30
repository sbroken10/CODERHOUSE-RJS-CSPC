import React, { useState, useEffect } from 'react'
import { ItemDetail } from './ItemDetail'
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


const inventario = [
    {
        id: '1',
        nombre: "Bonsai Diosme",
        precio: "35 USD",
        tamaño: "65cm x 15cm",
        descripcion: "Bonsai Diosme, edad de 7 años plantado en un tronco de pino tallado a mano",
        stock: 4,
        imgs: one

    },
    {
        id: '2',
        nombre: "Jade Golum",
        precio: "4 USD",
        tamaño: "10cm x 5cm",
        descripcion: "asd",
        stock: 2,
        imgs: two,

    },
    {
        id: '3',
        nombre: "Bonsai Pino Espinoso",
        precio: "45 USD",
        tamaño: "45cm x 50cm",
        descripcion: "asd",
        stock: 6,
        imgs: three,

    },
    {
        id: '4',
        nombre: "Bonsai Pino Estrella",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        descripcion: "asd",
        stock: 9,
        imgs: four,

    },
    {
        id: '5',
        nombre: "Bonsai Pino Estrellaasd",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        descripcion: "asd",
        stock: 2,
        imgs: five,

    },
    {
        id: '6',
        nombre: "Pino tallado con suculentasdasd",
        precio: "35 USD",
        tamaño: "65cm x 15cm",
        descripcion: "asd",
        stock: 3,
        imgs: six,

    },
    {
        id: '7',
        nombre: "Jade Golumassd",
        precio: "4 USD",
        tamaño: "10cm x 5cm",
        descripcion: "asd",
        stock: 9,
        imgs: seven,

    },
    {
        id: '8',
        nombre: "Bonsai Pino Espinosoasda",
        precio: "45 USD",
        tamaño: "45cm x 50cm",
        descripcion: "asd",
        stock: 5,
        imgs: eight,

    },
    {
        id: '9',
        nombre: "Bonsai Pino Estrellaasdad",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        descripcion: "asd",
        stock: 8,
        imgs: nine,

    },
    {
        id: '10',
        nombre: "Bonsai Pino Estrellaasda",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        descripcion: "asd",
        stock: 2,
        imgs: ten,

    },
]



const itemDetailCreation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(inventario), 2000);
    })
}

export const ItemDetailContainer = () => {

    const [itemD, setItemD] = useState([])

    const passDetails = () => {
        itemDetailCreation().then(
            listData => { setItemD(listData) })
    }

    useEffect(() => {
        passDetails();
    }, [])


    console.log(itemD)

    


    return (
                    
        itemD.length === 0? <h1>Cargando</h1> : <ItemDetail details={itemD}/>
    )
}


