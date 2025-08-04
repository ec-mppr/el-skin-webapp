import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import { GlobalStyle } from 'styles/GlobalStyle';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <GlobalStyle />
      <Footer />
    </Router>
  );
}