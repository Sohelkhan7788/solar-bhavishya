import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Fayde from "../components/Fayde";

// ✅ FIXED IMPORT (default import use)
import Sections from "../components/Sections";

const { Subsidy, Prakriya, KyonChunein, SevaKshetra, Contact, Footer } =
  Sections;

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Fayde />

      <Subsidy />
      <Prakriya />
      <KyonChunein />
      <SevaKshetra />
      <Contact />
      <Footer />
    </>
  );
}
