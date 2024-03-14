import React from 'react';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div style={{ padding: '20px', color: '#FFFFFF', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '10px', margin: '20px' }}>
      <Typography variant="h4" gutterBottom style={{ color: 'cyan' }}>
        Bienvenidos al Futuro del Comercio Electrónico de Isaac
      </Typography>
      <Typography style={{ color: 'lightgray' }}>
        Explora un universo de innovaciones y descubre las últimas tendencias en tecnología y diseño. En nuestra tienda, el futuro está al alcance de tus manos.
      </Typography>
    </div>
  );
}

export { Home };