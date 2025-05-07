import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import s from "./Main.module.css";
import SpecialsSection from "../SpecialsSection/SpecialsSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import BookingSection from "../BookingSection/BookingSection";

const Main = () => {
  return (
    <main className={s.main}>
      <HeroSection />
      <SpecialsSection />
      <TestimonialsSection />
      <BookingSection />
    </main>
  );
};

export default Main;
