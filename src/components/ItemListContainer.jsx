import { ItemCount } from './ItemCount';
import {Typography} from '@material-ui/core'
import React from 'react'


export const ItemListContainer = props => {
    const provisional = props
    return (
        <>
        <Typography>
            This is an ItemListContainer
        </Typography>
        <div>
         <ItemCount  cantidadDisponible={10}>
         </ItemCount>
        </div>
        <div>
        <ItemCount  cantidadDisponible={5}>
        </ItemCount>
        </div>
        <div>
        <ItemCount  cantidadDisponible={3}>
        </ItemCount>
        </div>
        </>
        
    )
}


