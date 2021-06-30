import React from 'react'
import { Button } from '@material-ui/core'
import ShopIcon from '@material-ui/icons/Shop';

export const ItemAddCart = props => {

    const {addCart} = props;
    return (
        <div >
          <Button onClick={addCart} startIcon={<ShopIcon/>}>Agregar al carrito</Button>
        </div>
    )
}
