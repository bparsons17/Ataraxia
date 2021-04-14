import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { createUser, login } from '../../store/session'
import '../style/signup.css'

const SignUpForm = () => {
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
    return dispatch(login({ email: "demo@aa.io", password: "password" }));
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

  if (sessionUser) {
    return <Redirect to="/goals" />;
  }

  return (
    <div className='background-img'>
      <div className="center_box">
        <form onSubmit={onSignUp} className="form">
          <h1 className="form_title">Sign Up</h1>
          <hr className="break"></hr>
          <p className="form_text">
            Nice to meet you! Sign up to set goals, journal and interact with our community! <br></br>
            Already have an account?
            <a href="/login" className="form_link">
              Log in
            </a>
          </p>
          <div>

              <input
                className='form_input'
                placeholder='User Name'
                type="text"
                name="username"
                onChange={updateUsername}
                value={username}
              ></input>
           </div> 
            <input
              className="form_input"
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={updateFirstname}
              value={firstname}
            ></input>
          
          <div>
            <input
              className="form_input"
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={updateLastname}
              value={lastname}
            ></input>
          </div>
          <div>
            <input
              className="form_input"
              type="text"
              name="email"
              placeholder="Email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <input
              className="form_input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <input
              className="form_input"
              type="password"
              name="repeat_password"
              placeholder="Confirm Password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button
            className="submit_button"
            shape="round"
            htmlType="submit"
            size="large"
            type="primary"
          >
            Sign Up
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
