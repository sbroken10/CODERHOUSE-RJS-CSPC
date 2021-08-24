import React, { useEffect, useContext, useState } from 'react'
import { Cart } from './Cart'
import { CartContext } from '../../contexts/components/CartContext'
import '../../styles/CartContainer.css'
import { Typography, Button } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import TextField from '@material-ui/core/TextField';
import { dataBase } from '../../../firebase/firebas';

export const CartList = props => {

    const { setCartFlag } = props

    const { cartList, setCartList, setOrderId } = useContext(CartContext)


    const [shoTot, setShoTot] = useState(0)
    const [BuyerName, setBuyerName] = useState()
    const [BuyerPhone, setBuyerPhone] = useState()
    const [BuyerEmail, setBuyerEmail] = useState()
    const [open, setOpen] = useState(false)
    const [msgNumber, setMsgNumber] = useState(undefined)
    const [msgEmail, setMsgEmail] = useState(undefined)
    const [msg, setMsg] = useState()
    const [tempNumb, setTempNumb] = useState()
    const [tempEmail, setTempEmail] = useState()
    const [priceFlag, setPriceFlag] = useState(true)

    useEffect(() => {
        let tot = 0;
        cartList.forEach(function (total) { tot = tot + (total.precio * total.cantidad) })
        setShoTot(tot)
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        valNumber(tempNumb);
        valEmail(tempEmail)
        snackMsg();
        if (BuyerName !== undefined && BuyerPhone !== undefined && BuyerEmail !== undefined) {
            try {
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
                })
            } catch (err) {

                alert('Revise los datos ingresados para la compra. No se pudo generar la compra, intente mas tarde', err)
            }
        } else {

        }

    }

    const valEmail = (email) => {
        const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(email)) {
            setOpen(false)
            setMsgEmail(undefined)
            setBuyerEmail(email);
        } else {

            setMsgEmail('El correo electronico ingresado no es valido')
        }
    }
    const valNumber = (num) => {
        if (!isNaN(num) && num.split('').length >= 9) {
            setOpen(false)
            setBuyerPhone(num);
            console.log("valido")
            console.log(num.split('').length)
            setMsgNumber(undefined)
        } else {
            setMsgNumber('El numero de contacto ingresado esta incorrecto (min 9 digitos)')

        }
    }
    const handleClose = () => {
        setOpen(false)
    }
    const snackMsg = () => {

        if (msgNumber !== undefined && msgEmail !== undefined) {
            setMsg(`${msgNumber},
             ${msgEmail}`)
            setOpen(true)
        } else {
            if (msgNumber !== undefined) {
                setMsg(`${msgNumber}`)
                setOpen(true)
            }else{
                if (msgEmail !== undefined) {
                    setMsg(`${msgEmail}`)
                    setOpen(true)
                }
            }
        }
    }

    return (
        <>
            <div className="cartContainer">{cartList.map((productos) =>
                <Cart product={productos} shoTot={shoTot} setShoTot={setShoTot} setPriceFlag={setPriceFlag} priceFlag={priceFlag} />
            )}
            </div>
            <div>
                <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning">
                        {msg}
                    </Alert>
                </Snackbar>
            </div>
            <div className="TotalContainer">
                <div className="cartButtonContainer"><Typography component="h4" variant="h4" className="txtTotal">{`Total a Pagar: ${shoTot} USD`}</Typography></div>
                <form autoComplete="off">
                    <div className="cartDetailContainer">
                        <TextField id="nombre" label="Nombre" variant="filled" className="cartDetailText" onChange={(e) => { setBuyerName(e.target.value); }} />
                    </div>
                    <div className="cartDetailContainer">
                        <TextField id="telefono" label="Telefono" variant="filled" className="cartDetailText" onChange={(e) => { setTempNumb(e.target.value); }} />
                    </div>
                    <div className="cartDetailContainer">
                        <TextField id="email" label="Email" variant="filled" className="cartDetailText" onChange={(e) => { setTempEmail(e.target.value); }} />
                    </div>
                </form>
                <div className="cartButtonContainer"><Button variant="contained" color="primary" className="cartDetailButton" onClick={buyCart}>Comprar</Button></div>
                <div className="cartButtonContainer"><Button variant="contained" color="primary" className="cartDetailButton" onClick={() => { setCartList([]) }} >Limpiar el carrito</Button></div>
            </div>
        </>
    )
}