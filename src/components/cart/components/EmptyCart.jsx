import React from 'react'
import { Typography, Button } from '@material-ui/core'
import '../../styles/CartContainer.css'
import { Link } from 'react-router-dom'

export const EmptyCart = () => {
    return (
        <section className="emptyCartContainer">
            <div className="cartAlert">
                <Typography variant="h2" className="emptyCartTxt"> El carrito esta vacio</Typography>
            </div>
            <div>
                <Link to={"/CODERHOUSE-RJS-CSPC"}>
                    <Button variant="contained" color="primary" className="algButton">
                        Ver Catalogo
                    </Button>
                </Link>
            </div>
        </section>
    )
}


