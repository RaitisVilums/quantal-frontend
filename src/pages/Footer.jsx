import { NavLink } from "react-router-dom";
import { Navlinks } from "../constants";

import { logo, facebook, youtube, instagram } from "../assets";

import "./styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__information">
        <div className="container">
          <div className="flex">
            <img src={logo} alt="Quantal lake logo" width={250} height={150} />
            <nav>
              <ul className="footer__navigation">
                {Navlinks.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.path}>{link.title}</NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="footer__follow">
              <h2>Follow Us</h2>
              <div className="footer__follow--icons">
                <a href="">
                  <img src={facebook} alt="facebook" width={20} height={20} />
                </a>
                <a href="">
                  <img src={instagram} alt="instagram" width={20} height={20} />
                </a>
                <a href="">
                  <img src={youtube} alt="youtube" width={20} height={20} />
                </a>
              </div>
            </div>
            <div className="footer__contact">
              <h2>Contact Us</h2>
              <a href="mailto:info@quantal-lake.eu">info@quantal-lake.eu</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__credentials">
        <div className="container">
          <div className="flex-full-w">
            <div className="footer__company">
              <p>
                &copy; 2019 - 2023 <span> Quantal Lake</span>, <br /> All rights
                reserved.
              </p>
            </div>
            <div className="footer__designers">
              <p>
                Design by <span>SIA TRICKSTER</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
