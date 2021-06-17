import React , {useState, useEffect} from 'react'
import { ItemDetail } from './ItemDetail'

const productoD =  {
        id: 1,
        nombre: "Pino tallado con suculentas",
        precio: "35 USD",
        tamaño: "65cm x 15cm",
        descripcion: "none",
        imgs: "",
    }

const itemDetailCreation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(productoD)

            , 2000);

    })
}

export const ItemDetailContainer = () => {

    const [itemD, setItemC] = useState({})

    const passDetails = () => {
        itemDetailCreation().then(
            Data => { setItemC(Data) })
    }

    useEffect(() => {
        passDetails();
    }, [])


    return (
        <div>
            <ItemDetail nombre={itemD.nombre} precio={itemD.precio} tamaño={itemD.tamaño} descripcion={itemD.descripcion} imgs={itemD.img}></ItemDetail>      
        </div>
    )
}


