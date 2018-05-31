import Link from "gatsby-link";
import React from "react";

const MobileMenu = ({ onToggleMenu }) => {
  return (
    <div>
      <div id="titleBar">
        <a href="#" onClick={onToggleMenu} className="toggle" />
        <span className="title">
          <Link to="/">Alexis Giard</Link>
        </span>
      </div>
      <div id="navPanel">
        <nav>
          {
            <Link
              className="link depth-0"
              onClick={onToggleMenu}
              to="/projects"
            >
              Projects
            </Link>
          }
          <Link className="link depth-0" onClick={onToggleMenu} to="/blog">
            Blog
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
