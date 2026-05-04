import React, { useState } from "react";
import API from "../api";
import toast from "react-hot-toast";
import "./Sections.css";

// ===== SUBSIDY =====
export function Subsidy() {
  const points = [
    "PM Surya Ghar Muft Bijli Yojana ke tahat subsidy uplabdh hai.",
    "3 kW tak 40% aur 3–10 kW tak 20% subsidy.",
    "Direct bank transfer.",
    "Complete paperwork support.",
  ];

  return (
    <section className="section" id="subsidy">
      <div className="container">
        <h2>Government Subsidy</h2>
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
  return (
    <section className="section" id="kyonchunein">
      <div className="container">
        <h2>Kyon Chunein</h2>
        <ul>
          <li>✔ Experienced Team</li>
          <li>✔ Quality Panels</li>
          <li>✔ Best Pricing</li>
          <li>✔ Full Support</li>
        </ul>
      </div>
    </section>
  );
}

// ===== SEVA KSHETRA =====
export function SevaKshetra() {
  const cities = ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"];
  return (
    <section className="section" id="seva">
      <div className="container">
        <h2>Seva Kshetra</h2>
        {cities.map((c, i) => (
          <span key={i}>{c} </span>
        ))}
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
    <section className="section" id="contact">
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
  return (
    <footer style={{ textAlign: "center", padding: "20px" }}>
      <h3>SOLAR BHAVISHYA</h3>
      <p>© 2026</p>
    </footer>
  );
}
