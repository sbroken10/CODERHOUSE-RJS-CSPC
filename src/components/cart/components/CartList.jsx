import React, { useEffect, useContext, useState } from 'react'
import { Cart } from './Cart'
import { CartContext } from '../../contexts/components/CartContext'
import '../../styles/CartContainer.css'
import { Typography, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import { dataBase } from '../../../firebase/firebas';
// import * as firebase from 'firebase/app';
// import 'firebase/firestore';







export const CartList = props => {

    let tot = 0
    const { shoTot, setShoTot, cartList, setCartList, priceFlag, setCartFlag, setOrderId } = useContext(CartContext)

    const [BuyerName, setBuyerName] = useState()
    const [BuyerPhone, setBuyerPhone] = useState()
    const [BuyerEmail, setBuyerEmail] = useState()
    const [loading, setLoading] = useState(false)


    console.log(cartList.length)


    useEffect(() => {
        cartList.forEach(function (total) { tot = tot + (total.precio * total.cantidad) })
        console.log(tot)
        console.log("me ejecute")
        setShoTot(tot)
        console.log(shoTot)
    }, [cartList.lengt, priceFlag])

    const order = dataBase.collection('ordenes');
    const newOrder = {
        buyerN: BuyerName,
        buyerP: BuyerPhone,
        buyerE: BuyerEmail,
        items: cartList,
        totalPrice: shoTot

    }

    const buyCart = () => {

        order.add(newOrder).then(({ id }) => {
            setOrderId(id);
            setCartFlag(false)
            setCartList([])
            setTimeout(() => { setCartFlag(true) }, 10000)
            cartList.forEach(element => {
                let newStock = element.stock - element.cantidad;
                dataBase.collection("catalogo").doc(element.id).update({ stock: newStock })
            })

        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setLoading(false)
        })

    }



    return (
        <>
            <div className="cartContainer">{cartList.map((productos) =>
                <Cart product={productos} />
            )}
            </div>)
            <div className="TotalContainer">
                <div className="cartButtonContainer"><Typography component="h4" variant="h4" className="txtTotal">{`Total a Pagar: ${shoTot} USD`}</Typography></div>
                <form autoComplete="off">
                    <div className="cartDetailContainer">
                        <TextField id="nombre" label="Nombre" variant="filled" className="cartDetailText" onChange={(e) => { setBuyerName(e.target.value); console.log(e.target.value); console.log(BuyerName) }} />
                    </div>
                    <div className="cartDetailContainer">
                        <TextField id="telefono" label="Telefono" variant="filled" className="cartDetailText" onChange={(e) => { setBuyerPhone(e.target.value); console.log(e.target.value); console.log(BuyerPhone) }} />
                    </div>
                    <div className="cartDetailContainer">
                        <TextField id="email" label="Email" variant="filled" className="cartDetailText" onChange={(e) => { setBuyerEmail(e.target.value); console.log(e.target.value); console.log(BuyerEmail) }} />
                    </div>
                </form>
                <div className="cartButtonContainer"><Button variant="contained" color="primary" className="cartDetailButton" onClick={buyCart}>Comprar</Button></div>
                <div className="cartButtonContainer"><Button variant="contained" color="primary" className="cartDetailButton" onClick={() => { setCartList([]) }} >Limpiar el carrito</Button></div>
            </div>
        </>
    )
}