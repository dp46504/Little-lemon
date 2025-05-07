import React from "react";
import s from "./SpecialsItem.module.css";

const SpecialsItem = ({ data, children }) => {
  return (
    <div className={s.specialsItem}>
      <img src={data.image} alt="" className={s.specialsItem_image} />
      <div className={s.specialItem_info_container}>
        <h2 className={s.specialsItem_title}>{data.title}</h2>
        <p className={s.specialsItem_description}>{data.description}</p>
      </div>
    </div>
  );
};

export default SpecialsItem;
