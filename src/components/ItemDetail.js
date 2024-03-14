import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import products from '../data/products';
import offers from '../data/offers';

const allItems = [...products, ...offers];

function ItemDetail() {
    const { itemId } = useParams();
    const item = allItems.find(item => item.id === itemId);

    if (!item) {
        return <div>No se encontró el ítem</div>;
    }

    return (
        <Paper style={{ padding: '20px', margin: '20px', backgroundColor: '#1a1a1a', color: 'white' }}>
            <Typography variant="h4" gutterBottom>{item.title}</Typography>
            <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
            <Typography variant="body1" style={{ marginTop: '10px' }}>{item.description}</Typography>
        </Paper>
    );
}

export { ItemDetail };