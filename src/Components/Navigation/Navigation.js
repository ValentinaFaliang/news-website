import React from "react";
import { categoryNames } from "../../utils.js";
import logo from "../../images/logo.svg";
import "./Navigation.css";

export const Navigation = ({
  onNavClick,
  currentCategory,
  className = "",
  placement = "header",
}) => {
  return (
    <nav className={`grid navigation navigation--${placement} ${className}`}>
      <a data-href="index" href="#" className="navigation__logo">
        <img src={logo} alt="Logo" className="navigation__image" />
      </a>
      <ul className="navigation__list">
        {["index", "fashion", "technology", "politics", "sport"].map((item) => {
          return (
            <li className="navigation__item" key={item}>
              <a
                onClick={onNavClick}
                data-href={item}
                href="#"
                className={`navigation__link ${
                  currentCategory === item ? "navigation__link--active" : ""
                }`}
              >
                {categoryNames[item]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
