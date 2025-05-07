import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import s from "./Main.module.css";
import SpecialsSection from "../SpecialsSection/SpecialsSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";

const Main = () => {
  return (
    <main className={s.main}>
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
    </main>
  );
};

export default Main;
