import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import GoalForm from './components/GoalForm'
import JournalForm from './components/JournalForm'
import Goal from './components/Goal'
import UsersList from "./components/UsersList";
import { restoreUser } from "./store/session";
import { useDispatch, useSelector } from "react-redux";
import User from "./components/User";
import { authenticate } from "./services/auth";


function App() {
  const dispatch = useDispatch();
  // const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const user = useSelector((state)=> state.session.user)

  useEffect(() => {
    dispatch(restoreUser()).then(() => {
      setLoaded(true);
    });
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar  />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
          />
        </Route>
        <ProtectedRoute path='/journals' authenticated={!!user}>
          <JournalForm />
        </ProtectedRoute>
        <ProtectedRoute path="/goal" authenticated={!!user} exact={true}>
            <Goal />
        </ProtectedRoute>
        <ProtectedRoute path="/goals" exact={true} authenticated={!!user}>
           <GoalForm />
          
          
        </ProtectedRoute>
        <Route path="/sign-up" exact={true}>
          <SignUpForm  />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={!!user}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={!!user}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={!!user}>
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
