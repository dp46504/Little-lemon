import React from "react";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
