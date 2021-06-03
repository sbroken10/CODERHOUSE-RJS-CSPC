import React from 'react'
import {AppBar, Button, makeStyles, Toolbar, Typography} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const styles = makeStyles(theme => ({
offset: theme.mixins.toolbar,
buttons:{
    flexGrow: 1
},
spacing:{
    marginRight:theme.spacing(3)
}
}))

const Navigation = ['Hot-Sales', 'Personaliza tu producto', 'Galeria y Portafolio', 'Contactanos']

const NavBar = () => {
    const classes = styles()
    return (
        <div>
            <AppBar>
                <Toolbar color="secondary">
                    <Typography variant="text" className={classes.buttons}>
                        <h1 className="focaTitle">FoCa</h1>
                    </Typography>
                <Button variant="text" color="inherit">
                {Navigation[0]}
                </Button>
                <Button variant="text" color="inherit">
                {Navigation[1]}
                </Button>
                <Button variant="text" color="inherit">
                {Navigation[2]}
                </Button>
                <Button variant="text" color="inherit">
                {Navigation[3]}
                </Button>
                <Button variant="button" >
                <ShoppingCartIcon color="secondary" />
                </Button>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}>

            </div>
        </div>
    )
}

export default NavBar

