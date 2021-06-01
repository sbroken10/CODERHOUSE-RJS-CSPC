import React from 'react'
import {AppBar, Button, makeStyles, Toolbar, Typography} from '@material-ui/core'

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
                <Toolbar>
                    <Typography variant="text" className={classes.buttons}>
                        FoCa
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
                </Toolbar>
            </AppBar>
            <div className={classes.offset}>

            </div>
        </div>
    )
}

export default NavBar

