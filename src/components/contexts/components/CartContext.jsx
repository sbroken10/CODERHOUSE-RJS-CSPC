import React, { createContext, useState, useEffect } from 'react'


export const CartContext = createContext();


export const CartProvider = ({ children }) => {


    function randomI(min, max) {//funcion para crear un idice random
        var numPosibilidades = max - min;
        var aleatorio = Math.random() * (numPosibilidades + 1);
        aleatorio = Math.floor(aleatorio);
        var ranI = min + aleatorio;
        var stringRanI = ranI.toString();
        return stringRanI
    }

    const [cartList, setCartList] = useState([]);

    const [cartCount, setCartCount] = useState(0)

    const [shoTot, setShoTot] = useState(0)

    const [intemCant, setItemCant] = useState()

    const [priceFlag, setPriceFlag] = useState(true)

    const [arrId, setArrId] = useState([])

    const [cartFlag, setCartFlag] = useState(true)

    const [orderId, setOrderId] = useState()


    useEffect(() => {
        setCartCount(cartList.length)
    }, [cartList.length])

    return <CartContext.Provider value={{ cartList, setCartList, setCartCount, cartCount, randomI, shoTot, setShoTot, priceFlag, setPriceFlag, intemCant, setItemCant, arrId, setArrId, cartFlag, setCartFlag, orderId, setOrderId }}>
        {children}
    </CartContext.Provider>
}


