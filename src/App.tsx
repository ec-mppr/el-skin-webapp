import React, { useState } from 'react';
import './App.css';
import AppRouter from './routes';
import { CartProvider } from './context/CartContext';
import { SearchProvider } from './context/SearchContext';

function App() {  
  return (
    <div className="App">
      <CartProvider>
        <SearchProvider>
          <AppRouter />
        </SearchProvider>
      </CartProvider>
    </div>
  );
}

export default App;
