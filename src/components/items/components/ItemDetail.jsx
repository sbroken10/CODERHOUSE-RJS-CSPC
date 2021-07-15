import { Typography, Button } from '@material-ui/core';
import React, { useContext} from 'react'
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


    const { cartList, setCartList} = useContext(CartContext)
    const [contador] = useContext(CounterContext)
    

    const unFlag = () => {
        setCFlag(true);
        

    }

    const { details, r1, r2, r3, r4, cFlag, setCFlag, open, setOpen} = props;

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
        setCartList([...cartList, { id: details.id, cantidad: contador, stock: details.stock, img: details.imgs, nombre: details.nombre, precio: details.precio }])

        // }
    }




    const validador = cFlag ? <ItemCount product={details} addCart={Flag} /> : <ItemAddCart />




    return (
        <div className="detailContainer">
            <div className="imgContainer">
                <img src={details.imgs} alt="none" className="itemImgs" />
            </div>
            <div className="txtContainer">
                <div>
                    <Typography variant="h3" className="TxtDetailElementN">{details.nombre}</Typography>
                    <Typography variant="h5" className="TxtDetailElementT">{details.tamaño}</Typography>
                    <Typography variant="h6" className="TxtDetailElementD">{details.descripcion}</Typography>
                    <Typography variant="h5" className="TxtDetailElementP">{`${details.precio} USD`}</Typography>
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
                    <img src={r1.imgs} alt={r1.nombre} className="itemImgs"></img>
                    <div className="overlay2">
                        <Link to={`/detalle/${r1.id}`}>
                            <Button variant="contained" color="primary" startIcon={<ShopIcon />} className="SalgButton" onClick={unFlag} />
                        </Link>
                    </div>
                </div>

                <div className="imgContainerS">
                    <img src={r2.imgs} alt={r2.nombre} className="itemImgs"></img>
                    <div className="overlay2">
                        <Link to={`/detalle/${r2.id}`}>
                            <Button variant="contained" color="primary" startIcon={<ShopIcon />} className="SalgButton" onClick={unFlag} />
                        </Link>
                    </div>
                </div>

                <div className="imgContainerS">
                    <img src={r3.imgs} alt={r3.nombre} className="itemImgs"></img>
                    <div className="overlay2">
                        <Link to={`/detalle/${r3.id}`}>
                            <Button variant="contained" color="primary" startIcon={<ShopIcon />} className="SalgButton" onClick={unFlag} />
                        </Link>
                    </div>
                </div>

                <div className="imgContainerS">
                    <img src={r4.imgs} alt={r4.nombre} className="itemImgs"></img>
                    <div className="overlay2">
                        <Link to={`/detalle/${r4.id}`}>
                            <Button variant="contained" color="primary" startIcon={<ShopIcon />} className="SalgButton" onClick={unFlag}/>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}



