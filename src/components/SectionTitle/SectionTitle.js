import React from "react";
import s from "./SectionTitle.module.css";
import { TbToolsKitchen3 } from "react-icons/tb";

const SectionTitle = ({ text, sectionId }) => {
  return (
    <div id={sectionId} className={s.text}>
      <TbToolsKitchen3 />
      {text}
      <TbToolsKitchen3 />
    </div>
  );
};

export default SectionTitle;
