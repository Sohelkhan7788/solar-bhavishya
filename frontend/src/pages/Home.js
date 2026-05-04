import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Fayde from "../components/Fayde";

import {
  Subsidy,
  Prakriya,
  KyonChunein,
  SevaKshetra,
  Contact,
  Footer,
} from "../components/Sections";

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
