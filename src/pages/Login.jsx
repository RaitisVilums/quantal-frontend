import React from "react";
import "./styles/Login.scss";
const Login = () => {
  return (
    <section>
      <div className="container">
        <form className="form" action="">
          <input type="text" />
          <input type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
