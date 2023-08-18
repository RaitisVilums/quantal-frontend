import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { Navigation } from "../components";

import { Navlinks } from "../constants";

import { logo } from "../assets";
import "./styles/Header.scss";

const Header = () => {
  const location = useLocation();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  const validPath = path === "/";
  const pagePath = Navlinks.find((link) => link.path === path) || "";

  return (
    <>
      <header
        className={`header ${
          validPath ? "background-image" : "background-image-changed"
        }`}
      >
        <div className="backdrop">
          <Navigation />
        </div>
        <div className="container">
          <NavLink to={"/"} className="header__logo">
            <img src={logo} alt="Quantal lake logo" width={250} height={150} />
          </NavLink>
        </div>
      </header>
      {!validPath && (
        <div className="location">
          <div className="container">
            <div className="location__wrapper">
              <Link className="location__link" to={"/"}>
                Quantal Lake
              </Link>
              <span className="location__divider">/</span>
              <Link className="location__link" to={pagePath.path}>
                {pagePath.title}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
