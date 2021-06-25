import React , {useState, useEffect} from 'react'
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
import { useParams } from 'react-router-dom'

const inventario = [
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
        nombre: "Bonsai Pino Estrellaasd",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        imgs: five,

    },
    {
        id: 6,
        nombre: "Pino tallado con suculentasdasd",
        precio: "35 USD",
        tamaño: "65cm x 15cm",
        descripcion: "asd",
        imgs: six,

    },
    {
        id: 7,
        nombre: "Jade Golumassd",
        precio: "4 USD",
        tamaño: "10cm x 5cm",
        descripcion: "asd",
        imgs: seven,

    },
    {
        id: 8,
        nombre: "Bonsai Pino Espinosoasda",
        precio: "45 USD",
        tamaño: "45cm x 50cm",
        descripcion: "asd",
        imgs: eight,

    },
    {
        id: 9,
        nombre: "Bonsai Pino Estrellaasdad",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        descripcion: "asd",
        imgs: nine,

    },
    {
        id: 10,
        nombre: "Bonsai Pino Estrellaasda",
        precio: "15 USD",
        tamaño: "30cm x 20cm",
        descripcion: "asd",
        imgs: ten,

    },
]


export const ItemDetailContainer = () => {

    

    const {identi} = useParams();
    console.log(identi)
    console.log(inventario)
    
    
   
    const resultado = inventario.find( elemento => elemento.id === identi );
    console.log(resultado)

    return (
        <div>
            <ItemDetail details={resultado}></ItemDetail>      
        </div>
    )
}


