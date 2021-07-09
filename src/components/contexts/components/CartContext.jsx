import React, { createContext, useState } from 'react'

export const CartContext = createContext();


export const CartProvider = ({children}) => {


    const [cartList, setCartList] = useState([]);

//    function vali (){
//     let vali = cartList.find(data => resultado.id === resultado.id)
//     if(vali)
//    }
    

    return <CartContext.Provider value={{cartList, setCartList}}>
            {children}
        </CartContext.Provider>
    
}


