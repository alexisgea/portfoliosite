import Link from "gatsby-link";
import React from "react";

const Footer = () => (
  <footer id="footer">
    <ul className="icons">
      <li>
        <a
          href="https://twitter.com/alexisgiard"
          className="icon alt fa-twitter"
          target="_blank"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      {/* <li>
        <a
          href="https://www.facebook.com/alexis.gia"
          className="icon alt fa-facebook"
          target="_blank"
        >
          <span className="label">Facebook</span>
        </a>
      </li> */}
      <li>
        <a
          href="https://ch.linkedin.com/in/alexis-giard-52846718"
          className="icon alt fa-linkedin"
          target="_blank"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
      {/* <li>
        <a href="#" className="icon alt fa-instagram" target="_blank">
          <span className="label">Instagram</span>
        </a>
      </li> */}
      <li>
        <a
          href="https://github.com/alexisgea"
          className="icon alt fa-github"
          target="_blank"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="mailto:alexis.giard@gmail.com"
          className="icon alt fa-envelope"
        >
          <span className="label">Email</span>
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
