import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function CartWidget() {
    const itemCount = 77; 

    return (
        <Badge badgeContent={itemCount} color="secondary">
            <ShoppingCartIcon sx={{ fontSize: 30 }} />
        </Badge>
    );
}

export { CartWidget };