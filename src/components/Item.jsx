import React from 'react'
import { Typography } from '@material-ui/core'
import './styles/Item.css'

export const Item = props => {
    const { producto } = props
    return (

        <div className="itemContainer">

            <Typography className="pTxtElement">{producto.nombre}</Typography>
        </div>
    )
}

