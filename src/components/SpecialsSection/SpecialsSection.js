import React from "react";
import s from "./SpecialsSection.module.css";
import SpecialsItem from "./SpecialsItem/SpecialsItem";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import p1 from "../../assets/icons_assets/greek_salad.png";
import p2 from "../../assets/icons_assets/bread.png";
import p3 from "../../assets/icons_assets/tuna.png";
import p4 from "../../assets/icons_assets/cutlet.png";

const SpecialsSection = () => {
  const [special, setSpecial] = React.useState(0);

  const specials = [
    {
      title: "Greek Salad",
      description:
        "The taste of Greece! Our Greek Salad features fresh tomatoes, cucumbers, red onion, Kalamata olives, and feta, simply dressed with olive oil and oregano.",
      image: p1,
    },
    {
      title: "Bread plate mix",
      description:
        "Our Bread Selection offers a delightful assortment of freshly baked breads, perfect for accompanying your meal or enjoying on its own. Each piece is chosen for its unique flavor and texture, providing a satisfying start to your dining experience.",
      image: p2,
    },
    {
      title: "Tuna Tatare",
      description:
        "Our Tuna Tartare features finely diced, fresh raw tuna, delicately seasoned and often mixed with ingredients like avocado, soy sauce, sesame oil, and scallions. A light and flavorful appetizer",
      image: p3,
    },
    {
      title: "Chineese Chicken Cutlet",
      description:
        "Try our unique Chicken Chinese Cutlet, a flattened patty of seasoned ground chicken prepared with a touch of Chinese culinary influence. Pan-fried until golden brown and crispy on the outside, tender and flavorful on the inside.",
      image: p4,
    },
  ];

  const scrollLeft = () => {
    setSpecial((prev) => (prev === 0 ? specials.length - 1 : prev - 1));
  };
  const scrollRight = () => {
    setSpecial((prev) => (prev === specials.length - 1 ? 0 : prev + 1));
  };

  return (
    <article id="special-section" className={s.specialsSection}>
      <FaArrowAltCircleLeft
        className={`${s.specialsButton} ${s.specialsButtonLeft}`}
        onClick={scrollLeft}
      />
      <FaArrowAltCircleRight
        className={`${s.specialsButton} ${s.specialsButtonRight}`}
        onClick={scrollRight}
      />
      <SpecialsItem data={specials[special]} />
    </article>
  );
};

export default SpecialsSection;
