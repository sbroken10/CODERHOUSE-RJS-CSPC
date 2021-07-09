import React from 'react'
import '../../styles/ItemAddCard.css'
import { Button } from '@material-ui/core'
import ShopIcon from '@material-ui/icons/Shop';
import { Link } from 'react-router-dom';


export const ItemAddCart = props => {

    
    return (
        <div className="buttonContainer">
          <Link to={'/cart'}>
          <Button   startIcon={<ShopIcon/>} className="detailButton" variant="contained" color="primary">Finalizar compra</Button>
          </Link>
        </div>
    )
}
