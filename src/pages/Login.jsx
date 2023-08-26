import React, { useState } from "react";
import "./styles/Login.scss";

import { Input } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (username === "test123" && password === "test123") {
      login(username, password);
      navigate("/products");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <section>
      <div className="container">
        <form className="form" onSubmit={handleLogin}>
          <Input
            title="Username"
            type="text"
            htmlFor="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            title="Password"
            type="password"
            htmlFor="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="form__btn" type="submit">
            Login
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        <div className="login__cta">
          <p>Don't have an account?</p>
          <Link to={"/"} className="login__cta--link">
            Create an account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
