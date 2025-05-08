import React from "react";
import s from "./SectionTitle.module.css";
import { TbToolsKitchen3 } from "react-icons/tb";

const SectionTitle = ({ text, sectionId }) => {
  return (
    <div id={sectionId} className={s.text}>
      {window.innerWidth > 768 && <TbToolsKitchen3 />}

      {text}
      {window.innerWidth > 768 && <TbToolsKitchen3 />}
    </div>
  );
};

export default SectionTitle;
