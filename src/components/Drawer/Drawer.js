import React, { useEffect } from "react";
import s from "./Drawer.module.css";
import closeButton from "../../assets/icons_assets/cancel-close.svg";

const Drawer = ({ open, setDrawerOpen, children }) => {
  const drawerRef = React.useRef(null);

  useEffect(() => {
    drawerRef.current.classList.toggle(s.active, open);
  }, [open]);

  return (
    <div ref={drawerRef} className={s.drawer}>
      <img
        src={closeButton}
        alt="close-button"
        className={s.closeButton}
        onClick={() => setDrawerOpen(false)}
      />
      {children}
    </div>
  );
};

export default Drawer;
