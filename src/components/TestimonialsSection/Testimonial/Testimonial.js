import React from "react";
import s from "./Testimonial.module.css";
import { FaMapPin } from "react-icons/fa6";

const Testimonial = ({ data }) => {
  return (
    <div className={s.testimonial}>
      <FaMapPin className={s.testimonial_pin} />
      <h2 className={s.testimonial_name}>{data.name}</h2>
      <p className={s.testimonial_text}>{data.text}</p>
    </div>
  );
};

export default Testimonial;
