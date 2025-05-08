import React, { useEffect } from "react";
import s from "./SectionTitle.module.css";
import { TbToolsKitchen3 } from "react-icons/tb";

const SectionTitle = ({ text, sectionId }) => {
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id={sectionId} className={s.text}>
      {isDesktop && <TbToolsKitchen3 />}

      {text}
      {isDesktop && <TbToolsKitchen3 />}
    </div>
  );
};

export default SectionTitle;
