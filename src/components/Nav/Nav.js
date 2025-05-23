import React from "react";
import Logo from "../Logo/Logo";
import s from "./Nav.module.css";
import Drawer from "../Drawer/Drawer";
import { HashLink as Link } from "react-router-hash-link";
import { RxHamburgerMenu } from "react-icons/rx";

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
          <RxHamburgerMenu
            onClick={handleBurgerClick}
            className={s.burger}
          ></RxHamburgerMenu>
          <Drawer open={drawerOpen} setDrawerOpen={setDrawerOpen}>
            {linksList}
          </Drawer>
        </>
      )}
    </nav>
  );
};

export default Nav;
