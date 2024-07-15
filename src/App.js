import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Banner from './components/header/banner'; 
import Header from './components/header/header'; 
import Home from './pages/home/Home';
import Contato from './components/contato/contato';
import Error404 from './pages/404/404';
import Estrutura from './pages/estrutura/estrutura';
import SobreNos from './pages/sobrenos/sobrenos'
import WhatsAppIcon from './components/whatsapp/whatsapp'
import './tailwind.css'; 

function smoothScrollTo(top, duration = 300) {
  const start = window.scrollY;
  const change = top - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = function() {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    smoothScrollTo(0, 500); // Ajuste a duração conforme necessário
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/estrutura" element={<Estrutura />} />
        </Routes>
        <Contato />
        <Footer />
        <WhatsAppIcon />
      </div>
    </Router>
  );
}

export default App;
