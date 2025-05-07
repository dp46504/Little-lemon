import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import s from "./Main.module.css";
import SpecialsSection from "../SpecialsSection/SpecialsSection";

const Main = () => {
  return (
    <main className={s.main}>
      <HeroSection />
      <SpecialsSection />
    </main>
  );
};

export default Main;
