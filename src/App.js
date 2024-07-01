import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import Footer from './components/footer/footer';
import Banner from './components/header/banner'; 
import Header from './components/header/header'; 
import ImageGrid from './components/grids/grid';
import Home from './pages/home/Home';
import Contato from './components/contato/contato'
import Error404 from './pages/404/404'
import Estrutura from './pages/estrutura/estrutura'
import './tailwind.css'; 

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Header />
        <ScrollToTop /> {/* ScrollToTop component to handle scrolling */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/estrutura" element={<Estrutura />} />
        </Routes>
        <Contato />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
