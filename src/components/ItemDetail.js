import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import products from '../data/products';
import offers from '../data/offers';
import { useCart } from './CartContext';

const allItems = [...products, ...offers];

function ItemDetail() {
    const { itemId } = useParams();
    const { addItem, removeItem, clearCart } = useCart();
    const item = allItems.find(item => item.id === itemId);

    if (!item) {
        return <div>No se encontró el ítem</div>;
    }

    const handleAddToCart = () => {
        addItem(item);
    };

    const handleRemoveFromCart = () => {
        removeItem(item.id);
    };

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <Paper style={{ padding: '20px', margin: '20px', backgroundColor: '#1a1a1a', color: 'white' }}>
            <Typography variant="h4" gutterBottom>{item.title}</Typography>
            <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
            <Typography variant="body1" style={{ marginTop: '10px' }}>{item.description}</Typography>
            <div style={{ marginTop: '20px' }}>
                <Button variant="contained" color="primary" onClick={handleAddToCart}>
                    <AddShoppingCartIcon />
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleRemoveFromCart} style={{ marginLeft: '10px' }}>
                    <RemoveShoppingCartIcon />
                </Button>
                <Button variant="outlined" color="error" onClick={handleClearCart} style={{ marginLeft: '10px' }}>
                    <DeleteSweepIcon />
                </Button>
            </div>
        </Paper>
    );
}

export { ItemDetail };