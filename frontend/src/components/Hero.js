import React, { useEffect, useRef } from 'react';
import './Hero.css';

const stats = [
  { value: '₹78K', label: 'Sarkari Subsidy Tak' },
  { value: '25', label: 'Saal Free Bijli' },
  { value: '80%', label: 'Bijli Bill Mein Bachat' },
  { value: '5+', label: 'Shahron Mein Seva' }
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    heroRef.current?.querySelectorAll('.animate').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-bg">
        <div className="sun-orb"></div>
        <div className="rays">
          {[...Array(8)].map((_, i) => <div key={i} className="ray" style={{ '--i': i }}></div>)}
        </div>
        <div className="particles">
          {[...Array(20)].map((_, i) => <div key={i} className="particle" style={{ '--i': i }}></div>)}
        </div>
      </div>

      <div className="container hero-content">
        <div className="badge animate">
          <span className="dot"></span>
          Ab Har Chhat Banegi Solar Powered
        </div>

        <h1 className="hero-title animate">
          <span className="title-solar">SOLAR</span>
          <br />
          <span className="title-bhavishya">BHAVISHYA</span>
        </h1>

        <p className="hero-subtitle animate">पूरे राजस्थान में रूफटॉप सोलर सिस्टम</p>
        <p className="hero-desc animate">
          Sarkari Subsidy ke Saath — Aaj Lagwaein, Kal Bachaein Laakhon Rupaye!
        </p>

        <div className="hero-btns animate">
          <button className="btn-primary" onClick={scrollToContact}>
            ⚡ Free Quote Paein
          </button>
          <a href="tel:8769465759" className="btn-secondary">
            📞 8769465759
          </a>
        </div>

        <div className="hero-stats animate">
          {stats.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="tel:8769465759" className="floating-call">
        📞 Abhi Call Karein
      </a>
    </section>
  );
}
