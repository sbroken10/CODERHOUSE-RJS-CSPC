import { Button, CardContent, makeStyles, Typography } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ShopIcon from '@material-ui/icons/Shop';
import '../../styles/ItemCountCard.css';
import React, { useEffect, useState } from 'react';



const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#C2361D',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    margin: 0,
    justifyContent: 'center',
    marginLeft: '8%',
    backgroundColor: 'white',
    borderRadius: '5px',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    justifyContent: 'center',
  },
  counter: {
    border: 'black'
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))



export const ItemCount = props => {
  const { stock, id, addCart } = props;
  const classes = styles();
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setContador(0);
  }, [id])

  let contadorV = 0;

  const contadorSuma = () => {
    contadorV = contador + 1;
    const disponible = contadorV > stock;
    setContador(disponible ? stock : contadorV)
  }
  const contadorResta = () => {
    contadorV = contador - 1;
    const validador = contador <= 0
    setContador(validador ? 0 : contadorV)
  }



  return (
    <div className={classes.details}>
      <div>
        <div className={classes.controls}>
          <Button onClick={contadorResta}><RemoveCircleOutlineIcon></RemoveCircleOutlineIcon></Button>
        </div>
        <div>
          <CardContent className={classes.cart}>
            <Typography component="h5" variant="h5"> {contador} </Typography>
          </CardContent>
        </div>
        <div className={classes.controls}>
          <Button onClick={contadorSuma}><AddCircleOutlineIcon></AddCircleOutlineIcon></Button>
        </div>
      </div>
      <div >
        <Button onClick={addCart} startIcon={<ShopIcon />}>Agregar al carrito</Button>
      </div>
    </div>
  )
}


