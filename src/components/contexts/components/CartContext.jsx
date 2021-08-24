import React, { createContext, useState, useEffect } from 'react'
export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const [cartCount, setCartCount] = useState(0)

    const [arrId, setArrId] = useState([])

    const [orderId, setOrderId] = useState()


    useEffect(() => {
        setCartCount(cartList.length)
    }, [cartList.length])

    return <CartContext.Provider value={{ cartList, setCartList, setCartCount, cartCount, arrId, setArrId, orderId, setOrderId }}>
        {children}
    </CartContext.Provider>
}


