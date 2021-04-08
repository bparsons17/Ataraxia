import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Info from './components/Info'
import GoalForm from './components/GoalForm'
import JournalForm from './components/JournalForm'
import Journal from './components/Journal'
import Goal from './components/Goal'
import UsersList from "./components/UsersList";
import { restoreUser } from "./store/session";
import { useDispatch, useSelector } from "react-redux";
import User from "./components/User";
import { authenticate } from "./services/auth";
import PostForm from "./components/PostForm";
import Post from "./components/Post";
import CommentForm from './components/CommentForm'
import Splash from './components/Splash'


function App() {
  const dispatch = useDispatch();
  // const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const user = useSelector((state)=> state.session.user)
  const goal = useSelector((state) => state.goal.goal)
  const posts = useSelector((state)=> state.post.post)

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
        <ProtectedRoute path='/journal' authenticated={!!user}>
          <Journal />
        </ProtectedRoute>
        <ProtectedRoute path='/posts' authenticated={!!user}>
          <PostForm posts={posts}/>
         
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
        {/* <ProtectedRoute path="/comments" exact={true} authenticated={!!user}>
          <CommentForm />
        </ProtectedRoute> */}
        <ProtectedRoute path="/" exact={true} authenticated={!!user}>
          <Splash />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
