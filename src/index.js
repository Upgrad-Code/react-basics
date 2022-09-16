import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsContextProvider } from './contexts/ProductsContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  //   <BrowserRouter>
  //     <ProductsContextProvider>
  //       <App />
  //     </ProductsContextProvider>
  //   </BrowserRouter>
  // </StrictMode>

  <ProductsContextProvider>
    <App />
  </ProductsContextProvider>
);
