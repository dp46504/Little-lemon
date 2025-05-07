import React from "react";
import s from "./SectionTitle.module.css";

const SectionTitle = ({ text }) => {
  return <div className={s.text}>{text}</div>;
};

export default SectionTitle;
