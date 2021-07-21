import React, { useContext } from 'react'
import { Typography, Button, CardContent } from '@material-ui/core'
import { Card } from '@material-ui/core';
import '../../styles/CartContainer.css'
import { CartContext } from '../../contexts/components/CartContext';

export const CartOrder = () => {

    const { shoTot, cartList, orderId } = useContext(CartContext)

    return (

        <Card>
            <CardContent>
                <div>
                    <Typography variant="h3">
                        Gracias por la compra
                    </Typography>
                </div>
                <div>
                    <Typography variant="h3">
                        Pronto nos comunicaremos contigo para concretar los datos del envio.
                    </Typography>
                    <Typography variant="h4">
                        {`Para consultar el estado de tu envio, este es el ID de tu compra: ${orderId}`}
                    </Typography>
                    <Typography variant="h4">
                        {`El precio total de tu orden: ${shoTot}`}
                    </Typography>
                    <ul>
                        <Typography variant="h4">
                            Esta ventana se cerrará en 10 segundos
                        </Typography>
                    </ul>
                </div>
            </CardContent>
        </Card>

    )
}


