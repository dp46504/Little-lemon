import React from "react";
import s from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <article className={s.hero}>
      <div className={s.hero_cta}>
        Welcome to Little Lemon's online ordering. Browse our menu, select your
        favorites, and let us take care of the rest. Fresh, flavorful food is
        just a few clicks away.
        <button className={s.hero_button}>Order now</button>
      </div>
    </article>
  );
};

export default HeroSection;
