import { Typography, Button } from '@material-ui/core';
import React, { useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/ItemDetails.css'
import ShopIcon from '@material-ui/icons/Shop';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount'
import { ItemAddCart } from './ItemAddCart'
import { CartContext } from '../../contexts/components/CartContext';

function randomI(min, max) {//funcion para crear un idice random
    var numPosibilidades = max - min;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    var ranI = min + aleatorio;
    var stringRanI = ranI.toString();
    return stringRanI
}



export const ItemDetail = props => {

    const {cFlag, setCFlag} = useContext(CartContext)
    
    function unFlag() {
        
        console.log(cFlag)
    }
    function Flag(){
        
        setCFlag(false);
        console.log(cFlag)
        

    }


    const { details } = props;
    console.log(details)

    var randomI1 = randomI(1, details.length)
    console.log(randomI1)
    var randomI2 = randomI(1, details.length)
    console.log(randomI1)
    var randomI3 = randomI(1, details.length)
    console.log(randomI1)
    var randomI4 = randomI(1, details.length)
    console.log(randomI1)

    const { identi } = useParams();
    console.log(identi)

    const resultado = details.find(elemento => elemento.id === identi);
    console.log(resultado)

    const random1 = details.find(elementoR => elementoR.id === randomI1);
    console.log(random1)
    const random2 = details.find(elementoR => elementoR.id === randomI2);
    console.log(random2)
    const random3 = details.find(elementoR => elementoR.id === randomI3);
    console.log(random3)
    const random4 = details.find(elementoR => elementoR.id === randomI4);
    console.log(random4)

    const validador = cFlag ? <ItemCount stock={resultado.stock} id={resultado.id} addCart={Flag} /> : <ItemAddCart/>




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
                    <Typography variant="h5" className="TxtDetailElementP">{resultado.precio}</Typography>
                </div>
                <div className="buttonContainer">
                    <div>
                        {validador}
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
