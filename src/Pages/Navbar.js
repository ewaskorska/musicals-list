import React from "react";
import { Link } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </li>
        <li>
          <Link to="/watched">Watched</Link>
        </li>
        <li>
          <Link to="/to-watch">To Watch</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
