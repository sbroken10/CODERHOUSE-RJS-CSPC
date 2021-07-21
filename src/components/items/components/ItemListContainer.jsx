import { ItemList } from './ItemList';
import React, { useContext, useEffect, useState } from 'react'
import { dataBase } from '../../../firebase/firebas';
import { CartContext } from '../../contexts/components/CartContext';


// import one from '../../../assets/1.JPG'
// import two from '../../../assets/2.JPG'
// import three from '../../../assets/3.jpg'
// import four from '../../../assets/4.jpg'
// import five from '../../../assets/5.jpg'
// import six from '../../../assets/6.jpg'
// import seven from '../../../assets/7.jpg'
// import eight from '../../../assets/8.jpg'
// import nine from '../../../assets/9.jpg'
// import ten from '../../../assets/10.jpg'


// const productos = [
//     {
//         id: 1,
//         nombre: "Pino tallado con suculentas",
//         precio: "35 USD",
//         tamaño: "65cm x 15cm",
//         imgs: one

//     },
//     {
//         id: 2,
//         nombre: "Jade Golum",
//         precio: "4 USD",
//         tamaño: "10cm x 5cm",
//         imgs: two,

//     },
//     {
//         id: 3,
//         nombre: "Bonsai Pino Espinoso",
//         precio: "45 USD",
//         tamaño: "45cm x 50cm",
//         imgs: three,

//     },
//     {
//         id: 4,
//         nombre: "Bonsai Pino Estrella",
//         precio: "15 USD",
//         tamaño: "30cm x 20cm",
//         imgs: four,

//     },
//     {
//         id: 5,
//         nombre: "Bonsai Pino Estrella",
//         precio: "15 USD",
//         tamaño: "30cm x 20cm",
//         imgs: five,

//     },
//     {
//         id: 6,
//         nombre: "Pino tallado con suculentas",
//         precio: "35 USD",
//         tamaño: "65cm x 15cm",
//         descripcion: "asd",
//         imgs: six,

//     },
//     {
//         id: 7,
//         nombre: "Jade Golum",
//         precio: "4 USD",
//         tamaño: "10cm x 5cm",
//         descripcion: "asd",
//         imgs: seven,

//     },
//     {
//         id: 8,
//         nombre: "Bonsai Pino Espinoso",
//         precio: "45 USD",
//         tamaño: "45cm x 50cm",
//         descripcion: "asd",
//         imgs: eight,

//     },
//     {
//         id: 9,
//         nombre: "Bonsai Pino Estrella",
//         precio: "15 USD",
//         tamaño: "30cm x 20cm",
//         descripcion: "asd",
//         imgs: nine,

//     },
//     {
//         id: 10,
//         nombre: "Bonsai Pino Estrella",
//         precio: "15 USD",
//         tamaño: "30cm x 20cm",
//         descripcion: "asd",
//         imgs: ten,

//     },
// ]

// const itemCreation = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(productos)

//             , 2000);

//     })
// }



export const ItemListContainer = () => {

    const { setItemCant, setArrId, arrId, itemCant } = useContext(CartContext)
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const itemCollection = dataBase.collection("catalogo")
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results')
            }
            setItems(querySnapshot.docs.map(doc => doc))
            setArrId(querySnapshot.docs.map(doc => doc.id))
            setItemCant(arrId.length)
            console.log(items)
            console.log(itemCant)
            console.log(arrId)
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
            setLoading(false)
        });
    }, [])



    // const passArray = () => {
    //     itemCreation().then(
    //         listData => { setItemC(listData) })
    // }

    // useEffect(() => {
    //     passArray();
    // }, [])



    return (
        <>
            <ItemList pr={items}></ItemList>

        </>

    )
}


