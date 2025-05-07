import React from "react";
import s from "./TestimonialsSection.module.css";
import Testimonial from "./Testimonial/Testimonial";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "This is a great product! Highly recommend it.",
      score: 5,
    },
    {
      name: "Jane Smith",
      text: "Amazing service and quality. Will buy again.",
      score: 4,
    },
    {
      name: "Sam Wilson",
      text: "I love this! It has changed my life for the better.",
      score: 5,
    },
  ];

  return (
    <article className={s.testimonialsSection}>
      {testimonials.map((testimonial) => (
        <Testimonial key={testimonial.text} data={testimonial} />
      ))}
    </article>
  );
};

export default TestimonialsSection;
