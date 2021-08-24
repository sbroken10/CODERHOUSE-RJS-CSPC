import React, { useState, useEffect } from 'react'
import { AppBar, Button, makeStyles, Toolbar, Typography } from '@material-ui/core'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';


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
    },
    links2: {
        textDecoration: 'none',
        color: '#752112',
    },
    menuItem: {
        fontFamily: 'Bebas Neue, cursive !important',
        fontSize: '22px !important',
        paddingTop: '3vh'
    },
    drawer: {
        color: "red",
    },
    "@media (max-width: 900px)": {
        paddingLeft: 0,
    },
}))

export const NavBar = () => {

    const classes = styles()
    const navigation =
        [
            {
                nombre: "Galeria y Portafolio",
                enlace: "/CODERHOUSE-RJS-CSPC"

            },
            {
                nombre: "Contactanos",
                enlace: "/contactenos"

            }
        ]

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        }
    }, []);

    const getDrawer = () => {
        return navigation.map((item) =>
            <Link to={item.enlace} color="inherit" className={classes.links2} >
                <MenuItem className={classes.menuItem}>{item.nombre}</MenuItem>
            </Link>
        );
    };

    const displayMobile = () => {

        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));

        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));


        return (
            <Toolbar color="secondary">
                <Typography variant="text" className={classes.buttons}>
                    <h1 className="focaTitle">FoCa</h1>
                </Typography>
                <IconButton
                    {...{
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",

                    }} onClick={handleDrawerOpen}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose} className={classes.drawer}>
                    <div>
                        {getDrawer()}
                    </div>
                </Drawer>
            </Toolbar>
        );
    };

    return (
        <div>
            <AppBar>
                {mobileView ? displayMobile() :
                    <Toolbar color="secondary">
                        <Typography variant="text" className={classes.buttons}>
                            <h1 className="focaTitle">FoCa</h1>
                        </Typography>
                        <Button variant="text" color="inherit">
                            <Link to="/CODERHOUSE-RJS-CSPC" className={classes.links}>
                                {navigation[0].nombre}
                            </Link>
                        </Button>


                        <Button variant="text" color="inherit">
                            <Link to="/contactenos" className={classes.links}>
                                {navigation[1].nombre}
                            </Link>
                        </Button>

                        <CartWidget className={classes.spacing} />
                    </Toolbar>}
            </AppBar>
            <div className={classes.offset}>

            </div>
        </div>
    )
}



