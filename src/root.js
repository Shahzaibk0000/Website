import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme/theme';
import Home from './pages/home';
import About from './pages/about';
import Team from './pages/team';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

const Root = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </Router>
  </ThemeProvider>
);

export default Root;
