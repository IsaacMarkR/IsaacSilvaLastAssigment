import React, { useState, useEffect } from 'react';

function BackgroundSlider({ images, duration, transition }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [images, duration]);

  return (
    <div style={{
      backgroundImage: `url(${images[index]})`,
      transition: `background-image ${transition}s ease-in-out`,
      height: '100vh',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1
    }} />
  );
}

export { BackgroundSlider };