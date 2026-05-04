import React, { useState } from "react";
import API from "../api";
import toast from "react-hot-toast";
import "./Sections.css";

// ===== SUBSIDY =====
export function Subsidy() {
  const points = [
    "PM Surya Ghar Muft Bijli Yojana ke tahat 1 kW se 10 kW tak ke system par bhari subsidy uplabdh hai.",
    "3 kW tak ke system par 40% aur 3–10 kW tak par 20% subsidy sarkar deti hai.",
    "Subsidy seedha aapke bank account mein transfer ki jaati hai — bina kisi jhanjhat ke.",
    "Hum poori paperwork aur sarkari formality aapke liye sambhalte hain.",
    "*Subsidy sarkari niyamon v sharton ke anusar. Adhik jankari ke liye sampark karein.",
  ];
  return (
    <section className="section" id="subsidy">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SARKARI SAHAYATA</span>
          <h2 className="section-title">
            BHARAT SARKAR KI <span className="gold">SUBSIDY</span>
          </h2>
        </div>
        <ul>
          {points.map((p, i) => (
            <li key={i}>✓ {p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ===== PRAKRIYA =====
export function Prakriya() {
  const steps = ["Free Survey", "Quote", "Subsidy", "Install", "Free Bijli"];
  return (
    <section className="section" id="prakriya">
      <div className="container">
        <h2>Process</h2>
        {steps.map((s, i) => (
          <p key={i}>
            {i + 1}. {s}
          </p>
        ))}
      </div>
    </section>
  );
}

// ===== KYON CHUNEIN =====
export function KyonChunein() {
  const points = [
    "5+ saal ka experience",
    "500+ installations Rajasthan me",
    "Best quality panels",
    "Complete subsidy support",
  ];
  return (
    <section className="section" id="kyonchunein">
      <div className="container">
        <h2>Kyon Chunein</h2>
        <ul>
          {points.map((p, i) => (
            <li key={i}>✔ {p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// 🔥 ===== ADD THIS (MISSING FIX) =====
export function SevaKshetra() {
  const cities = ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner"];

  return (
    <section className="section" id="seva">
      <div className="container">
        <h2>Seva Kshetra</h2>
        <ul>
          {cities.map((city, i) => (
            <li key={i}>📍 {city}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ===== CONTACT =====
export function Contact() {
  const [form, setForm] = useState({
    naam: "",
    mobile: "",
    sheher: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/leads", form);
      toast.success("Submitted!");
    } catch {
      toast.error("Error");
    }
  };

  return (
    <section className="section">
      <form onSubmit={handleSubmit}>
        <input name="naam" onChange={handleChange} placeholder="Naam" />
        <input name="mobile" onChange={handleChange} placeholder="Mobile" />
        <input name="sheher" onChange={handleChange} placeholder="Sheher" />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

// ===== FOOTER =====
export function Footer() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    const count = clickCount + 1;
    setClickCount(count);

    if (count === 3) {
      window.location.href = "/admin/login";
      setClickCount(0);
    }

    setTimeout(() => setClickCount(0), 2000);
  };

  return (
    <footer onClick={handleClick} style={{ cursor: "pointer" }}>
      <h3>SOLAR BHAVISHYA</h3>
      <p>© 2026</p>
    </footer>
  );
}
