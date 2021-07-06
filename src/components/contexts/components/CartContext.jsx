import React, { createContext, useState } from 'react'

export const CartContext = createContext();


export const CartProvider = ({children}) => {

    
    const [id, setId] = useState();
    const [img, setImg] = useState();
    const [cFlag, setCFlag] = useState(true)
    const [cartList, setCartList] = useState([])
    let contadorV = 0;

    function addCart(){  
        setCartList(...cartList, {id, contadorV, img})
    }

    function Flag(){ 
        setCFlag(false);
        console.log(cFlag)
    }

    return <CartContext.Provider value={{contadorV, id, setId, img, setImg, cFlag, setCFlag, addCart}}>
            {children}
        </CartContext.Provider>
    
}


