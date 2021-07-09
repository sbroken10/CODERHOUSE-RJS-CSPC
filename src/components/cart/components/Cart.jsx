import React,{useContext} from 'react'
import { CartContext } from '../../contexts/components/CartContext'


export const Cart = () => {

    const {cartList} = useContext(CartContext)
    console.log(cartList)

    const list = cartList.map((productos, index) => <li key={index}>{productos.cantidad}</li>)


    return (
        
        <ul>
            {list}
        </ul>
    )
}

