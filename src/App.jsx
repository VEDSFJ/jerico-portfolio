// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <footer className="text-center p-4 bg-light-navy text-gray-500">
        © 2025 Jerico. All Rights Reserved.
      </footer>
    </div>
  )
}

export default App