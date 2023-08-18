import React from "react";
import { Navlinks } from "../constants";
import { NavLink } from "react-router-dom";

import Search from "./Search";
import Language from "./Language";

import "./styles/Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation__menu">
          <ul className="navigation__items">
            {Navlinks.map((link) => (
              <li className="navigation__item" key={link.id}>
                <NavLink to={link.path}>{link.title}</NavLink>
              </li>
            ))}
          </ul>
          <div className="navigation__cta">
            <Search />
            <Language />
            <NavLink to="/login">Login</NavLink>
            {/* Cart when succses login */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
