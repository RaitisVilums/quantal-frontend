import React from "react";
import { Navlinks } from "../constants";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

import Search from "./Search";
import Language from "./Language";

import "./styles/Navigation.scss";
import Cart from "./Cart";

// ! Create a Cart component,
// ! Create Prodcuts Page and Product Page,
// ! Add to cart functionality

const Navigation = () => {
  const { user, logout } = useAuth();

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
            {!user && (
              <NavLink className="navigation__item" to="/login">
                Login
              </NavLink>
            )}
            {user && (
              <>
                <button className="navigation__btn" onClick={logout}>
                  Logout
                </button>
                <Cart />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
