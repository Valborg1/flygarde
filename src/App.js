// src/App.js
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Midsplash from './components/Midsplash';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Midsplash />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
