import { Typography } from '@material-ui/core';
import React from 'react'


export const ItemDetail = props => {

    const { details } = props;


    return (
        <div>
            <Typography>{details.nombre}</Typography>
            <Typography>{details.tamaño}</Typography>
            <Typography>{details.descripcion}</Typography>
            <Typography>{details.precio}</Typography>
            <img src={details.img} alt="none" />
        </div>
    )
}
