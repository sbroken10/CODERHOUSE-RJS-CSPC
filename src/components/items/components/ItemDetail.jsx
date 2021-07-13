import { Typography, Button } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/ItemDetails.css'
import ShopIcon from '@material-ui/icons/Shop';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount'
import { ItemAddCart } from './ItemAddCart'
import { CartContext } from '../../contexts/components/CartContext';
import { CounterContext } from '../../contexts/components/CounterContext';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';







export const ItemDetail = props => {


    const { cartList, setCartList, randomI } = useContext(CartContext)
    const [contador] = useContext(CounterContext)
    const [cFlag, setCFlag] = useState(true)
    const [open, setOpen] = useState(false)
    console.log(cFlag)

    const unFlag = () => {
        setCFlag(true);

    }

    const { details } = props;
    console.log(details)

    var randomI1 = randomI(1, details.length)

    var randomI2 = randomI(1, details.length)

    var randomI3 = randomI(1, details.length)

    var randomI4 = randomI(1, details.length)


    const { identi } = useParams();


    const resultado = details.find(elemento => elemento.id === identi);

    useEffect(() => {
        if (cartList.some(data => data['id'] === resultado.id)) {
            setCFlag(false)
            setOpen(true)
        }
    }, [identi])

    const handleClose = () => {
        setOpen(false)
    }



    const Flag = () => {
        setCFlag(false);
        console.log(cartList)
        
        console.log(cartList.length)
        
        // if (cartList.some(data => data['id'] === resultado.id)) {

        //     // console.log('No se puede')
        //     // let objMod = cartList.find(data =>data['id'] === resultado.id)
        //     // console.log(objMod)
        //     // let indexOf = cartList.indexOf(objMod )
        //     // console.log(indexOf)
        //     // console.log(cartList[indexOf])
        //     // const modCantidad = cartList
        //     // console.log(modCantidad[indexOf])
        //     // modCantidad[indexOf].cantidad = modCantidad[indexOf].cantidad + contador
        //     // setCartList(modCantidad)

        // } else {
            setCartList([...cartList, { id: resultado.id, cantidad: contador, stock: resultado.stock, img: resultado.imgs, nombre: resultado.nombre, precio: resultado.precio}])
            
        // }
    }

    const random1 = details.find(elementoR => elementoR.id === randomI1);

    const random2 = details.find(elementoR => elementoR.id === randomI2);

    const random3 = details.find(elementoR => elementoR.id === randomI3);

    const random4 = details.find(elementoR => elementoR.id === randomI4);


    const validador = cFlag ? <ItemCount product={resultado} addCart={Flag} /> : <ItemAddCart />




    return (
        <div className="detailContainer">
            <div className="imgContainer">
                <img src={resultado.imgs} alt="none" className="itemImgs" />
            </div>
            <div className="txtContainer">
                <div>
                    <Typography variant="h3" className="TxtDetailElementN">{resultado.nombre}</Typography>
                    <Typography variant="h5" className="TxtDetailElementT">{resultado.tamaño}</Typography>
                    <Typography variant="h6" className="TxtDetailElementD">{resultado.descripcion}</Typography>
                    <Typography variant="h5" className="TxtDetailElementP">{`${resultado.precio} USD`}</Typography>
                </div>
                <div className="buttonContainer">
                    <div>
                        {validador}
                        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="warning">
                                El item ya se encuentra en el carrito
                            </Alert>
                        </Snackbar>
                    </div>
                    <div className="buttonContainer2">
                        <Link to={"/CODERHOUSE-RJS-CSPC"}>
                            <Button variant="contained" color="primary" className="detailButton" onClick={unFlag}>
                                Catalogo
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="txtContainer2">
                <div className="imgContainerS">
                    <img src={random1.imgs} alt={random1.nombre} className="itemImgs"></img>
                    <div className="overlay2">
                        <Link to={`/detalle/${random1.id}`}>
                            <Button variant="contained" color="primary" startIcon={<ShopIcon />} className="SalgButton" onClick={unFlag}>

                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="imgContainerS">
                    <img src={random2.imgs} alt={random2.nombre} className="itemImgs"></img>
                    <div className="overlay2">

                        <Link to={`/detalle/${random2.id}`}>
                            <Button variant="contained" color="primary" startIcon={<ShopIcon />} className="SalgButton" onClick={unFlag}>

                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="imgContainerS">
                    <img src={random3.imgs} alt={random3.nombre} className="itemImgs"></img>
                    <div className="overlay2">

                        <Link to={`/detalle/${random3.id}`}>
                            <Button variant="contained" color="primary" startIcon={<ShopIcon />} className="SalgButton" onClick={unFlag}>

                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="imgContainerS">
                    <img src={random4.imgs} alt={random4.nombre} className="itemImgs"></img>
                    <div className="overlay2">

                        <Link to={`/detalle/${random4.id}`}>
                            <Button variant="contained" color="primary" startIcon={<ShopIcon />} className="SalgButton" onClick={unFlag}>

                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}



