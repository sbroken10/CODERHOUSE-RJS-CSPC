import { Button, Card, CardContent, makeStyles, Typography } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import './styles/ItemCountCard.css';
import React, { useState } from 'react';



const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#C2361D',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
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
  const { cantidadDisponible } = props;
  const classes = styles();
  const [contador, setContador] = useState(0);
  let contadorV = 0;

  const contadorSuma = () => {
    contadorV = contador + 1;
    const disponible = contadorV > cantidadDisponible;
    setContador(disponible ? cantidadDisponible : contadorV)
  }
  const contadorResta = () => {
    contadorV = contador - 1;
    const validador = contador <= 0
    setContador(validador ? 0 : contadorV)
  }
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.cart}>
          <Typography component="h5" variant="h5"> {contador} </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button onClick={contadorResta}><RemoveCircleOutlineIcon></RemoveCircleOutlineIcon></Button>
          <Button onClick={contadorSuma}><AddCircleOutlineIcon></AddCircleOutlineIcon></Button>

        </div>
        <div className={classes.cart}>
          <Button>Agregar al carrito</Button>
        </div>
      </div>


    </Card>
  )
}


