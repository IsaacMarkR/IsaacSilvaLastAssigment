import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useCart } from './CartContext'; 

function CartWidget() {
    const { items } = useCart();

    const itemCount = items.reduce((total, item) => total + item.quantity, 0);

    return (
        <Badge badgeContent={itemCount} color="secondary">
            <ShoppingCartIcon sx={{ fontSize: 30 }} />
        </Badge>
    );
}

export { CartWidget };