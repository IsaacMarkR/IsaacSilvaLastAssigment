import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetail } from './components/ItemDetail';
import { BackgroundSlider } from './components/BackgroundSlider';
import { CartResume } from './components/CartResume';

import backgroundImage1 from './assets/futuristic1.jpg';
import backgroundImage2 from './assets/futuristic2.jpg';
import backgroundImage3 from './assets/futuristic3.webp';

const backgrounds = [backgroundImage1, backgroundImage2, backgroundImage3];

function App() {
  return (
    <BrowserRouter>
      <div>
        <BackgroundSlider images={backgrounds} duration={5} transition={2} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route path="/cart" element={<CartResume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;