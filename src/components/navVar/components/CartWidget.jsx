import React, {useContext} from 'react'
import { Button, } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { CartContext } from '../../contexts/components/CartContext';
import { Link } from 'react-router-dom';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -5,
        top: 20,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);




const CartWidget = () => {

    const {cartCount} = useContext(CartContext)
    
    return (
        <Link to={'/cart'}>
        <Button variant="text" >
            <StyledBadge badgeContent={cartCount} color="secondary"  overlap="circle">
                <ShoppingCartIcon color="secondary" fontSize="large" />
            </StyledBadge>
        </Button>
        </Link>
    )
}

export default CartWidget
