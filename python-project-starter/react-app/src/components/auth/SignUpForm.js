import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { signUp } from '../../services/auth';
import { createUser, login } from '../../store/session'
import { Button } from "antd";

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const onSignUp = async (e) => {
    e.preventDefault();
    let newErrors = [];
    console.log('ssjkskjsjsk')
    if (password === repeatPassword) {
      console.log('test')
      dispatch(createUser({ username, firstname, lastname, email, password }))
        .then(() => {
          setUsername("")
          setFirstname("");
          setLastname("");
          setEmail("");
          setPassword("");
        })
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            newErrors = data.errors;
            // setErrors(newErrors);
          }
        });
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    return dispatch(login({  email: "demo@demo.com", password: "password" }));
  };

  const updateFirstname = (e) => {
    setFirstname(e.target.value)
  }
  const updateLastname = (e) => {
    setLastname(e.target.value)
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          onChange={updateFirstname}
          value={firstname}
        ></input>
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          onChange={updateLastname}
          value={lastname}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <Button htmlType="submit">Sign Up</Button>
      <Button
            className="submit_button"
            onClick={demoLogin}
            shape="round"
            htmlType="submit"
            size="large"
            type="primary"
          >
            Demo User
          </Button>
    </form>
  );
};

export default SignUpForm;
