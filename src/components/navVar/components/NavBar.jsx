import React from 'react'
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const styles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    buttons: {
        flexGrow: 1
    },
    spacing: {
        marginRight: theme.spacing(3)
    },
    links: {
        textDecoration: 'none',
        fontFamily: 'Bebas Neue, cursive !important',
        fontSize: '22px',
        color: 'white'
    }
}))

const Navigation = ['Galeria y Portafolio', 'Contactanos']

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
                        <Link to="/" className={classes.links}>
                            {Navigation[0]}
                        </Link>
                    </Button>


                    <Button variant="text" color="inherit">
                        <Link to="/contactenos" className={classes.links}>
                            {Navigation[1]}
                        </Link>
                    </Button>

                    <CartWidget className={classes.spacing} />
                </Toolbar>
            </AppBar>
            <div className={classes.offset}>

            </div>
        </div>
    )
}

export default NavBar

