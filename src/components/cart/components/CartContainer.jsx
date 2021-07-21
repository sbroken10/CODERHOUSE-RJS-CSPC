import React, { useContext } from 'react'
import { CartContext } from '../../contexts/components/CartContext'
import { CartList } from './CartList'
import { EmptyCart } from './EmptyCart'
import { CartOrder } from './CartOrder'



export const CartContainer = () => {

    const { cartList, cartFlag } = useContext(CartContext)
    console.log(cartList.length)

    return (
        <div>
            {cartFlag ? (cartList.length === 0 ?
                <EmptyCart /> : <CartList />) : <CartOrder />}
        </div>

    )
}

