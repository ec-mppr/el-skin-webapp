import React from 'react';
import './App.css';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Contact from './pages/Contact/Contact';
// import NotFound from './pages/NotFound/NotFound';
import AppRouter from './routes';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
