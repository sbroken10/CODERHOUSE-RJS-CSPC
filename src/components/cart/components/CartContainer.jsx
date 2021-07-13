import React, { useContext} from 'react'
import { CartContext } from '../../contexts/components/CartContext'
import {CartList} from './CartList'
import {EmptyCart} from './EmptyCart'



export const CartContainer = () => {

    const { cartList } = useContext(CartContext)
    console.log(cartList.length)
    
    return (
        <div>
            {cartList.length === 0 ?
                 <EmptyCart/>:<CartList/>
                }
        </div>

    )
}

