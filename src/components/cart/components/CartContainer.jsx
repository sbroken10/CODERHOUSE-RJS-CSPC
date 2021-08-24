import React, { useState, useContext } from 'react'
import { CartContext } from '../../contexts/components/CartContext'
import { CartList } from './CartList'
import { EmptyCart } from './EmptyCart'
import { CartOrder } from './CartOrder'



export const CartContainer = props => {

    const { cartList } = useContext(CartContext)
    
    const [cartFlag, setCartFlag] = useState(true)

    return (
        <div>
            {cartFlag ? (cartList.length === 0 ?
                <EmptyCart /> : <CartList setCartFlag={setCartFlag}/>) : <CartOrder />}
        </div>

    )
}

