import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleContextmenu = e => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);

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
  );
}

export default App;