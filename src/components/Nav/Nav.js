import React, { use, useEffect } from "react";
import Logo from "../Logo/Logo";
import s from "./Nav.module.css";
import burger from "../../assets/icons_assets/burger-bar.png";
import Drawer from "../Drawer/Drawer";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  const links = [
    {
      name: "Specials",
      url: "/#specials-section",
    },
    {
      name: "Testimonials",
      url: "/#testimonials-section",
    },
    {
      name: "Book a table",
      url: "/#book-a-table-section",
    },
  ];

  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

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
      <Link className={s.link} to={link.url}>
        {link.name}
      </Link>
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
