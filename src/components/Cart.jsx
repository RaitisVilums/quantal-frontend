import { useState } from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "../assets";

import "./styles/Cart.scss";
import { logo } from "../assets";

const Cart = () => {
  const [active, setActive] = useState(false);

  const openCartHandler = () => {
    setActive(true);
  };
  const closeCartHandler = () => {
    setActive(false);
  };

  return (
    <div>
      <Link
        to={"/cart"}
        className="cart"
        onMouseEnter={openCartHandler}
        onMouseLeave={closeCartHandler}
      >
        <CartIcon className="cart__icon" width={20} height={20} />
        <span className="cart__quantity">0</span>
      </Link>
      {active && (
        <div className="cart__dropdown">
          <div className="cart__heading">
            <div>
              <CartIcon className="cart__icon--white" width={30} height={30} />
              <p>0</p>
            </div>
            <p>Total : $0.00</p>
          </div>

          <div className="cart__items">
            <div className="cart__item">
              <img src={logo} alt="item" width={76} height={76} />
              <div className="cart__item--content">
                <p className="cart__item--name">Item name</p>
                <p className="cart__item--price">
                  <span>$10000000</span> Quantity: 0
                </p>
              </div>
              <button className="cart__item--remove">x</button>
            </div>
          </div>
          <div className="cart__buttons">
            <Link className="cart__btn" to={"/cart"}>
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
