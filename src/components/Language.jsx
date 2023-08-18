import { useState } from "react";
import { arrow } from "../assets";

import "./styles/Language.scss";

const Language = () => {
  const [active, setActive] = useState(false);

  const changeLanguegeHandler = () => {
    console.log("change language");
  };

  const openDropdownHandler = () => {
    setActive(true);
  };
  const closeDropdownHandler = () => {
    setActive(false);
  };

  return (
    <div className="language" onMouseEnter={openDropdownHandler}>
      <div className="language__flag">flag</div>
      <img src={arrow} alt="arrow" width={15} height={15} />

      {active && (
        <div
          className={`language__dropdown`}
          onMouseLeave={closeDropdownHandler}
        >
          <div
            className="language__dropdown-item"
            onClick={changeLanguegeHandler}
          >
            flag
          </div>
          <div
            className="language__dropdown-item"
            onClick={changeLanguegeHandler}
          >
            flag
          </div>
          <div
            className="language__dropdown-item"
            onClick={changeLanguegeHandler}
          >
            flag
          </div>
          <div
            className="language__dropdown-item"
            onClick={changeLanguegeHandler}
          >
            flag
          </div>
        </div>
      )}
    </div>
  );
};

export default Language;
