import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`navbar ${width > 600 ? "" : "mobile"} ${
        isMenuOpen ? "opened" : ""
      }`}
    >
      {width > 600 ? (
        <NavLink to="/">
          <img className="logo home-btn" src={Logo} alt="menu" />
        </NavLink>
      ) : (
        <>
          <div className="circle outer" />
          <div className="circle inner" />
          <img
            className="logo btn"
            src={Logo}
            alt="home"
            onClick={toggleMenu}
          />
        </>
      )}
      {width < 600 && (
        <>
          <ul className={`menu`} style={{ listStyleType: "none" }}>
            <li className={`menu_option current`}>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="menu_option">
              <NavLink activeClassName="active" to="/watched">
                Watched
              </NavLink>
            </li>
            <li className="menu_option">
              <NavLink activeClassName="active" to="/to-watch">
                To Watch
              </NavLink>
            </li>
          </ul>
          <div className="menu_close btn" onClick={toggleMenu}>
            <i className="far fa-times-circle fa-3x"></i>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
