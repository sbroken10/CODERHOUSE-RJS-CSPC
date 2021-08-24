import React, { useState, useContext } from 'react'
import { Typography, Button, CardContent } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import '../../styles/CartContainer.css'
import { CartContext } from '../../contexts/components/CartContext';

export const Cart = props => {

    const { product, shoTot, setShoTot, priceFlag, setPriceFlag} = props
    const { cartList, setCartList, setCartCount} = useContext(CartContext)
    const [cartCounter, setCartCounter] = useState(product.cantidad)

    let contadorV = 1;


    const suma = () => {
        contadorV = cartCounter + 1;
        const disponible = contadorV > product.stock;
        disponible ? product.cantidad = product.stock : product.cantidad = contadorV
        setCartCounter(disponible ? product.stock : contadorV)
        setPriceFlag(!priceFlag)
    }

    const resta = () => {
        contadorV = cartCounter - 1;
        const validador = product.cantidad <= 1
        validador ? product.cantidad = 1 : product.cantidad = contadorV
        setCartCounter(validador ? 1 : contadorV)
        setPriceFlag(!priceFlag)
    }
    const del = () => {

        let opcion = window.confirm("Desea eliminar el item del carrito?");
        if (opcion) {
            let contador = 0
            let tempList = cartList
            tempList.forEach((registro) => {
                if (registro.id === product.id) {
                    let minus = shoTot - (tempList[contador].cantidad * tempList[contador].precio)
                    setShoTot(minus)
                    tempList.splice(contador, 1);
                    setCartCount(tempList.length)
                }
                contador++;
            })
            setCartList(tempList)
        }
    }

    return (
        <div className="cartItemContainer">
            <div className="imgCartContainer">
                <img src={product.img} alt={product.nombre} className="itemCartImg"></img>
            </div>
            <div className="detailsCartContainer">
                <div>
                    <Typography variant="h3" className="cartTxtDetailElementN">{product.nombre}</Typography>
                </div>
                <div>
                    <Typography variant="h3" className="cartTxtDetailElementP">{`${product.precio * cartCounter} USD`}</Typography>
                </div>
                <div className="cartDetails">
                    <div className="cartControls">
                        <Button onClick={resta}><RemoveCircleOutlineIcon></RemoveCircleOutlineIcon></Button>
                    </div>
                    <div>
                        <CardContent className="contador">
                            <Typography component="h5" variant="h5"> {cartCounter} </Typography>
                        </CardContent>
                    </div>
                    <div className="cartControls">
                        <Button onClick={suma}><AddCircleOutlineIcon></AddCircleOutlineIcon></Button>
                    </div>
                </div>
                <div>
                    <Button variant="contained" color="primary" className="detailButton" onClick={del}>
                        Eliminar
                    </Button>
                </div>
            </div>
        </div>
    )
}