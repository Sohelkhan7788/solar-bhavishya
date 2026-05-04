import React from 'react';
import './Sections.css';

const fayde = [
  {
    icon: '💡',
    title: '60–80% BACHAT',
    desc: 'Bijli bill mein 60 se 80 pratishat tak ki bhari bachat harr mahine.',
    highlight: true
  },
  {
    icon: '🏛️',
    title: '₹78,000 SUBSIDY',
    desc: 'Bharat Sarkar dwara solar panel par ₹78,000 tak ki subsidy.',
    highlight: false
  },
  {
    icon: '⚡',
    title: '25 SAAL FREE BIJLI',
    desc: 'Ek baar installation ke baad 25 saal tak bina kharach bijli.',
    highlight: true
  },
  {
    icon: '🏠',
    title: 'PROPERTY VALUE BADHE',
    desc: 'Solar system se ghar ya dukaan ki market value mein ijafa.',
    highlight: false
  },
  {
    icon: '🌿',
    title: 'PARYAVARAN SANRAKSHAN',
    desc: 'Swachh urja se desh ka bhavishya sanwaren — Harit Bharat.',
    highlight: false
  },
  {
    icon: '🔄',
    title: 'NET METERING',
    desc: 'Atirikt bijli grid ko bechain aur bill ko shunya tak laein.',
    highlight: false
  }
];

export default function Fayde() {
  return (
    <section className="section" id="fayde">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">FAYDE</span>
          <h2 className="section-title">
            SOLAR LAGANE KE <span className="gold">BADE FAYDE</span>
          </h2>
          <div className="title-line"></div>
          <p className="section-desc">
            Ek baar nivesh karein aur 25 saal tak bijli ki chinta se mukt rahein.
          </p>
        </div>

        <div className="cards-grid">
          {fayde.map((f, i) => (
            <div key={i} className={`card ${f.highlight ? 'card-highlighted' : ''}`}>
              <div className="card-icon">{f.icon}</div>
              <h3 className="card-title">{f.title}</h3>
              <p className="card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
