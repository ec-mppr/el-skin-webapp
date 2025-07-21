import React, { useState } from 'react';
import './App.css';
import AppRouter from './routes';
import { CartContext } from './context/cartContext';

function App() {  
  const [cartProducts, setCartProducts] = useState([] as string[]);
  return (
    <div className="App">
      <CartContext value={{
        cartProducts: cartProducts,
        setCartProducts: setCartProducts,
      }} >
        <AppRouter />
      </CartContext>
    </div>
  );
}

export default App;
