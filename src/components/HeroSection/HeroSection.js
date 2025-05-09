import React from "react";
import s from "./HeroSection.module.css";
import hero_image_1 from "../../assets/icons_assets/hero_food_1.png";
import hero_image_2 from "../../assets/icons_assets/hero_food_2.png";
import { BsCursor } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";

const HeroSection = () => {
  return (
    <article className={s.hero}>
      <img
        src={hero_image_1}
        className={`${s.hero_img1} ${s.hero_img}`}
        alt="food1"
      />
      <img
        src={hero_image_2}
        className={`${s.hero_img2} ${s.hero_img}`}
        alt="food2"
      />
      <div className={s.hero_cta_container}>
        <div className={s.hero_cta_text}>
          Welcome to <span className={s.highlight}>Little Lemon's </span> online
          ordering. Browse our menu, select your favorites, and let us take care
          of the rest. <span className={s.underline}>Fresh</span>,{" "}
          <span className={s.underline}>flavorful</span> food is just a few
          <Link className={s.click_word} to="/#book-a-table-section">
            <BsCursor className={s.cursor_icon} />
            clicks
          </Link>{" "}
          away.
        </div>
        <Link to="/#book-a-table-section" className={s.hero_cta_button}>
          Book a table!
        </Link>
      </div>
    </article>
  );
};

export default HeroSection;
