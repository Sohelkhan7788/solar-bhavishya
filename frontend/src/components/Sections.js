import React, { useState } from "react";
import API from "../api"; // ✅ FIXED
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
          <div className="title-line"></div>
        </div>
        <div className="subsidy-layout">
          <div className="subsidy-card">
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>🏛️</div>
            <span className="subsidy-label">Bharat Sarkar ki Ore Se</span>
            <div className="subsidy-amount">₹78,000</div>
            <p className="subsidy-sub">
              Tak Ki Sarkari Subsidy* Solar Rooftop Ke Liye
            </p>
          </div>
          <ul className="subsidy-list">
            {points.map((p, i) => (
              <li key={i}>
                <span className="check-icon">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ===== PRAKRIYA =====
export function Prakriya() {
  const steps = [
    {
      n: 1,
      title: "Free Survey",
      desc: "Hamari team chhat ka muft nirikshan karti hai.",
    },
    {
      n: 2,
      title: "Custom Quote",
      desc: "Budget ke anusar best solar package taiyar kiya jaata hai.",
    },
    {
      n: 3,
      title: "Subsidy Process",
      desc: "Sabhi government forms aur avedan hamari zimmmedari.",
    },
    {
      n: 4,
      title: "Installation",
      desc: "1–2 din mein professional installation.",
    },
    {
      n: 5,
      title: "Free Bijli ☀️",
      desc: "25 saal tak free bijli aur net metering ka fayda.",
    },
  ];

  return (
    <section className="section" id="prakriya">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PRAKRIYA</span>
          <h2 className="section-title">
            KAISA KAAM KARTA HAI <span className="gold">HAMARA SYSTEM</span>
          </h2>
          <div className="title-line"></div>
        </div>
        <div className="steps-row">
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div className="step-item">
                <div className="step-circle">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="step-arrow">→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== CONTACT (FIXED API CALL) =====
export function Contact() {
  const [form, setForm] = useState({
    naam: "",
    mobile: "",
    sheher: "",
    zaroorat: "",
    sandesh: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.naam || !form.mobile || !form.sheher) {
      return toast.error("Naam, mobile aur sheher zaroori hai");
    }

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      return toast.error("Valid 10 digit mobile number daalo");
    }

    setLoading(true);

    try {
      await API.post("/api/leads", form); // ✅ FIXED
      toast.success("🎉 Aapka request mil gaya! Jald sampark karenge.");
      setForm({ naam: "", mobile: "", sheher: "", zaroorat: "", sandesh: "" });
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Kuch gadbad ho gayi, dobara try karein",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="section-tag">SAMPARK KAREIN</span>
          <h2 className="section-title">
            ABHI <span className="gold">BAAT KAREIN</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            name="naam"
            value={form.naam}
            onChange={handleChange}
            placeholder="Naam"
          />
          <input
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            placeholder="Mobile"
          />
          <input
            name="sheher"
            value={form.sheher}
            onChange={handleChange}
            placeholder="Sheher"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

// ===== KYON CHUNEIN =====
export function KyonChunein() {
  const points = [
    "5+ saal ka experience",
    "500+ installations Rajasthan me",
    "Best quality panels & inverter",
    "Complete subsidy support",
    "After-sales service guarantee",
  ];

  return (
    <section className="section" id="kyonchunein">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">KYON CHUNEIN</span>
          <h2 className="section-title">
            KYON CHUNE <span className="gold">SOLAR BHAVISHYA</span>
          </h2>
          <div className="title-line"></div>
        </div>

        <ul>
          {points.map((p, i) => (
            <li key={i}>✅ {p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ===== FOOTER =====
export function Footer() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 3) {
      window.location.href = "/admin/login";
      setClickCount(0);
    }

    setTimeout(() => setClickCount(0), 2000);
  };

  return (
    <footer
      className="footer"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="footer-logo">
        <span>SOLAR </span>
        <span>BHAVISHYA</span>
      </div>
      <p className="footer-copy">
        © 2026 Nasir Khan Solar Solutions. Poore Rajasthan Mein Seva.
      </p>
    </footer>
  );
}
