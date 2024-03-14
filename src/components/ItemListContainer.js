import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import products from '../data/products';
import offers from '../data/offers';

function ProductCard({ title, description, imageUrl }) {
  return (
    <Paper style={{ padding: '10px', margin: '10px', backgroundColor: '#1a1a1a', color: 'white' }}>
      <Typography variant="h6">{title}</Typography>
      <img src={imageUrl} alt={title} style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover' }} />
      <Typography variant="body2" style={{ marginTop: '10px' }}>{description}</Typography>
    </Paper>
  );
}

function ItemListContainer() {
  const { categoryId } = useParams();

  const itemsToShow = categoryId === 'productos' ? products : categoryId === 'ofertas' ? offers : [];

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <Typography variant="h4" gutterBottom style={{ color: 'cyan', textAlign: 'center' }}>
        {categoryId === '1' ? 'Nuestros Productos' : 'Nuestras Ofertas'}
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {itemsToShow.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
              <ProductCard title={item.title} description={item.description} imageUrl={item.imageUrl} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export { ItemListContainer };