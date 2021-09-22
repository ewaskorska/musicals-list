import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Logo from "../../../images/logo.svg";

import clsx from "clsx";

import styles from "./navbar.module.scss";

const Navbar = ({ className, children }) => {
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
      className={clsx(
        className,
        styles.root,
        styles.navbar,
        width > 600 ? "" : styles.mobile,
        isMenuOpen ? styles.opened : ""
      )}
    >
      {width > 600 ? (
        <NavLink to="/">
          <img
            className={clsx(styles.logo, styles.homeBtn)}
            src={Logo}
            alt="menu"
          />
        </NavLink>
      ) : (
        <>
          <div className={clsx(styles.circle, styles.outer)} />
          <div className={clsx(styles.circle, styles.inner)} />
          <img
            className={clsx(styles.logo, styles.btn)}
            src={Logo}
            alt="home"
            onClick={toggleMenu}
          />
        </>
      )}
      {width < 600 && (
        <>
          <ul className={styles.menu} style={{ listStyleType: "none" }}>
            <li className={clsx(styles.menuOption, styles.current)}>
              <NavLink exact activeClassName={styles.active} to="/">
                Home
              </NavLink>
            </li>
            <li className={clsx(styles.menuOption)}>
              <NavLink activeClassName={styles.active} to="/watched">
                Watched
              </NavLink>
            </li>
            <li className={clsx(styles.menuOption)}>
              <NavLink activeClassName={styles.active} to="/to-watch">
                To Watch
              </NavLink>
            </li>
          </ul>
          <div
            className={clsx(styles.menuClose, styles.btn)}
            onClick={toggleMenu}
          >
            <i
              className={` ${styles.FaTimesCircle} far fa-times-circle fa-3x`}
            ></i>
          </div>
        </>
      )}
      {children}
    </nav>
  );
};

Navbar.PropsTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Navbar;
