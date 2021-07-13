import React, { useEffect, useContext } from 'react'
import { Cart } from './Cart'
import { CartContext } from '../../contexts/components/CartContext'
import '../../styles/CartContainer.css'
import { Typography, Button } from '@material-ui/core'





export const CartList = props => {

    let tot = 0
    const {shoTot, setShoTot , cartList, setCartList, priceFlag, setPriceFlag} = useContext(CartContext)
    console.log(cartList.length)
       

    useEffect(() => {
        cartList.forEach(function (total) { tot = tot + (total.precio*total.cantidad) })
        console.log(tot)
        console.log("me ejecute")
        setShoTot(tot)
        console.log(shoTot)
    }, [cartList.lengt, priceFlag])

    return (
        <>
            <div className="cartContainer">{cartList.map((productos) =>
                <Cart product={productos}/>
            )}
            </div>)
            <div className="TotalContainer">
                <div><Typography component="h4" variant="h4" className="txtTotal">{`${shoTot} USD`}</Typography></div>
                <div className="cartButtonContainer"><Button variant="contained" color="primary" className="cartDetailButton" >Terminar mi compra</Button></div>
                <div className="cartButtonContainer"><Button variant="contained" color="primary" className="cartDetailButton" onClick={() => {setCartList([])} } >Limpiar el carrito</Button></div>
            </div>
        </>
    )
}