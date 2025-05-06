import React from "react";
import LogoSvg from "../../assets/icons_assets/Logo.svg";
import s from "./Logo.module.css";

const Logo = () => {
  return <img src={LogoSvg} className={s.logo} alt="Little Lemon logo" />;
};

export default Logo;
