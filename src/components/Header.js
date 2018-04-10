import Link from "gatsby-link";
import React from "react";

const Header = ({ onToggleMenu }) => {
  return (
    <header id="header">
      <h1 id="logo">{/* <Link to="/">Alexis - Indie Game Dev</Link> */}</h1>
      <nav id="nav">
        <ul>
          <li>
            <Link onClick={onToggleMenu} to="/">
              Home
            </Link>
          </li>
          {/* <li>
            <Link onClick={onToggleMenu} to="/projects">
              Projects
            </Link>
          </li> */}
          <li>
            <Link onClick={onToggleMenu} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
