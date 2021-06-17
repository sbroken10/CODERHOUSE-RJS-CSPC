import { Typography } from '@material-ui/core';
import React from 'react'


export const ItemDetail = props => {

    const {nombre, precio, tamaño, descripcion, img} = props;


    return (
        <div>
        <Typography>{nombre}</Typography>
        <Typography>{tamaño}</Typography>
        <Typography>{descripcion}</Typography>
        <Typography>{precio}</Typography>
        <img src={img} alt="none" />
        </div>
    )
}
