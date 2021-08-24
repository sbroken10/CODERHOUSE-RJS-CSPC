import React from 'react'
import { Typography, Button } from '@material-ui/core'
import '../../styles/Item.css'
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';



export const Item = props => {

    const { producto } = props
    return (

        <div className="itemContainer">
            <img src={producto.data().imgs} alt={producto.data().nombre} className="itemImgs"></img>
            <div className="overlay detailMenuContainer">
                <Typography variant="h4" component="h4" className="sTxtElement">{producto.data().nombre}</Typography>
                <Link to={`/detalle/${producto.id}`}>
                    <Button variant="contained" color="primary" startIcon={<AddIcon />} className="algButton">
                        Detalles
                    </Button>
                </Link>
            </div>
        </div>
    )
}

