import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import Main from 'pages/Main/Main';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}