import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import '../style/login.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  function onLogin(e) {
    e.preventDefault();
    return dispatch(login({ email, password }));
  }

  if (sessionUser) {
    return <Redirect to="/goals" />;
  }

  const demoLogin = async (e) => {
    e.preventDefault();
    return dispatch(login({  email: "demo@aa.io", password: "password" }));
  };


  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="background">
      <div className="center_box">
        <form onSubmit={onLogin} className="form">
          <h1 className="form_title">Log In</h1>
          <hr className="break"></hr>
          <p className="form_text">
            Welcome back! Log in to connect with our community! <br></br>
            First time?
            <a href="/sign-up" className="form_link">
              Make an account
            </a>
          </p>

          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <input
              className="form_input"
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <input
            className="form_input"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <button
            className="submit_button"
            type="submit"
          >
            Login
          </button>
          <button
            className="submit_button"
            onClick={demoLogin}
            shape="round"
            type="submit"
            size="large"
            type="primary"
          >
            Demo User
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;