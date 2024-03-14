# Navegabilidad de la Aplicación By Isaac Silva

La aplicación cuenta con una estructura de navegación que permite a los usuarios moverse a través de diferentes vistas, incluyendo la página de inicio, categorías de productos u ofertas, detalles de ítems específicos, y una visión general del carrito de compras. A continuación, se describirá la navegabilidad y las rutas definidas en la aplicación:

## Página de Inicio

La página de inicio sirve como punto de entrada a la aplicación. Aquí, los usuarios pueden ver una introducción general, posiblemente con destacados o elementos seleccionados.

- **Ruta**: `/`
- **Componente**: `Home`

![Página de Inicio](/public/Screenshot%202024-02-24%20at%2012.08.57 AM.png)

## Categorías de Productos u Ofertas

Esta vista muestra los ítems según la categoría seleccionada por el usuario, ya sean productos o ofertas. Cada ítem se muestra con su respectivo título, descripción y una imagen.

- **Ruta**: `/category/:categoryId`
    - `categoryId` puede ser "productos" para productos o "ofertas" para ofertas especiales.
- **Componente**: `ItemListContainer`

![Categorías de Productos](/src/assets/Screenshot%202024-03-13%20at%2011.31.46 PM.png)
![Categorías de Ofertas](/src/assets/Screenshot%202024-03-13%20at%2011.39.42 PM.png)

## Detalles del Ítem

La vista de detalles del ítem muestra información más detallada sobre un producto u oferta específica, incluyendo una descripción ampliada y posiblemente opciones adicionales como tamaños, colores o promociones relacionadas.

- **Ruta**: `/item/:itemId`
    - `itemId` es el identificador único del producto u oferta.
- **Componente**: `ItemDetail`

![Detalles del Ítem](/src/assets/Screenshot%202024-03-13%20at%2011.32.08 PM.png)

## Resumen del Carrito

La página de resumen del carrito muestra una lista de todos los ítems que el usuario ha añadido al carrito, permitiendo la modificación de cantidades o la eliminación de ítems.

- **Ruta**: `/cart`
- **Componente**: `CartResume`

![Resumen del Carrito](/src/assets/Screenshot%202024-03-13%20at%2011.32.23 PM.png)

## Componentes Adicionales

### Navbar

El `Navbar` proporciona enlaces rápidos a las principales secciones de la aplicación, facilitando la navegación entre la página de inicio, productos, ofertas, y la página del carrito de compras.

### BackgroundSlider

El `BackgroundSlider` añade un toque visual dinámico a la aplicación, mostrando una secuencia de imágenes de fondo que cambian a lo largo del tiempo.

Cada componente y vista están diseñados para ofrecer una experiencia de usuario fluida y coherente, asegurando que la navegación sea intuitiva y accesible desde cualquier punto de la aplicación.