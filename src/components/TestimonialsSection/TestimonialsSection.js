import React from "react";
import s from "./TestimonialsSection.module.css";
import Testimonial from "./Testimonial/Testimonial";
import SectionTitle from "../SectionTitle/SectionTitle";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "As a busy professional, I don't always have time to cook elaborate meals. This online food service has been a game-changer! The ordering process is incredibly easy, and the food arrives fresh and delicious every time.",
      score: 5,
    },
    {
      name: "Jane Smith",
      text: "Wow! Just tried the Pad Thai and it was absolutely bursting with flavor. It tasted just like something I'd get in a top-notch restaurant. I've also ordered a few other dishes, and each one has been fantastic.",
      score: 4,
    },
    {
      name: "Sam Wilson",
      text: "I've been a regular customer for the past few months, and I'm consistently impressed with the service. My orders are always accurate and delivered on time, exactly as promised. ",
      score: 5,
    },
  ];

  return (
    <>
      <SectionTitle text="Testimonials" />
      <article className={s.testimonialsSection}>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.text} data={testimonial} />
        ))}
      </article>
    </>
  );
};

export default TestimonialsSection;
