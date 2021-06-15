import React from 'react'
import { Typography } from '@material-ui/core'
import './styles/Item.css'

export const Item = props => {
    const {nombre, precio, tamaño, imgs, alt} = props
    return (
        <>
        <div className="itemContainer">
            <div>
            <Typography className="pTxtElement">{nombre}</Typography>
            <Typography className="sTxtElement">{precio}</Typography>
            <Typography className="sTxtElement">{tamaño}</Typography>
            </div>
            <div>
            <img src={imgs} alt={alt}></img>
            </div>
        </div>
        </>
    )
}
 
