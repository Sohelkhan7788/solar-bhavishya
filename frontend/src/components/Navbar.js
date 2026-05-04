import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-solar">SOLAR</span>
          <span className="logo-bhavishya">BHAVISHYA</span>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollTo('fayde')}>फायदे</button>
          <button onClick={() => scrollTo('subsidy')}>सब्सिडी</button>
          <button onClick={() => scrollTo('prakriya')}>प्रक्रिया</button>
          <button onClick={() => scrollTo('seva-kshetra')}>सेवा क्षेत्र</button>
          <button onClick={() => scrollTo('contact')}>संपर्क</button>
        </div>

        <a href="tel:8769465759" className="nav-cta">
          <span>📞</span> अभी कॉल करें
        </a>

        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
