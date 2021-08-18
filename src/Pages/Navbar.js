import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Link to="/">
            <i class="fas fa-home"></i>
          </Link>
        </li>
        <li>
          <Link to="/personal-list"> My list</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
