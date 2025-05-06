import React, { use } from "react";
import Logo from "../Logo/Logo";
import s from "./Nav.module.css";
import burger from "../../assets/icons_assets/burger-bar.png";
import Drawer from "../Drawer/Drawer";

const Nav = () => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/",
    },
    {
      name: "Menu",
      url: "/",
    },
  ];

  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navListRef = React.useRef(null);

  React.useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBurgerClick = () => {
    setDrawerOpen((prev) => !prev);
  };

  const linksList = links.map((link) => (
    <li key={link.name} className={s.navItem}>
      <a className={s.link} href={link.url}>
        {link.name}
      </a>
    </li>
  ));

  return (
    <nav className={s.nav}>
      <Logo />
      {innerWidth >= 768 ? (
        <ul className={s.navList}>{linksList}</ul>
      ) : (
        <>
          <img
            src={burger}
            onClick={handleBurgerClick}
            alt="burger-menu-icon"
            className={s.burger}
          ></img>
          <Drawer open={drawerOpen} setDrawerOpen={setDrawerOpen}>
            {linksList}
          </Drawer>
        </>
      )}
    </nav>
  );
};

export default Nav;
