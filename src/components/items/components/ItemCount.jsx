import { Button, CardContent, makeStyles, Typography } from '@material-ui/core'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ShopIcon from '@material-ui/icons/Shop';
import '../../styles/ItemCountCard.css';
import React, { useEffect, useContext} from 'react';
import { CounterContext } from '../../contexts/components/CounterContext';



const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
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
  },
}))



export const ItemCount = props => {

  const classes = styles();
  let contadorV = 1;
  const [contador, setContador]= useContext(CounterContext);
  const { addCart, product } = props;
  
  

  useEffect(() => {
    setContador(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.id])

  
  const contadorSuma = () => {
    contadorV = contador + 1;
    const disponible = contadorV > product.stock;
    setContador(disponible ? product.stock : contadorV)
  }
  const contadorResta = () => {
    contadorV = contador - 1;
    const validador = contador <= 1
    setContador(validador ? 1 : contadorV)
  }

  return (
    <div className={classes.container}>
      <div className="details">
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
      <div className="add">
        <Button onClick={addCart} startIcon={<ShopIcon /> } variant="contained" color="primary">Agregar al carrito</Button>
      </div>
    </div>
  )
}


