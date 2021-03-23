import { createStore, combineReducers, applyMiddleware, compose } from "redux";



import thunk from "redux-thunk";
import session from "./session";
import goal from './goals'
import journal from './journals'
import post from './posts'
import comment from './comments'
const rootReducer = combineReducers({
  session,
  goal,
  journal,
  post,
  comment
});


let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk));
}

const configureStore = (preloadedState) => {
  
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;