import React from "react";
import s from "./Testimonial.module.css";

const Testimonial = ({ data }) => {
  return (
    <div className={s.testimonial}>
      <h2 className={s.testimonial_name}>{data.name}</h2>
      <p className={s.testimonial_text}>{data.text}</p>
    </div>
  );
};

export default Testimonial;
