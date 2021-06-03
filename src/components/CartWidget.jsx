import React from 'react'
import {Button,} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartWidget = () => {
    return (
        <Button variant="button" >
            <ShoppingCartIcon color="secondary" fontSize="large"/>
        </Button>
    )
}

export default CartWidget
