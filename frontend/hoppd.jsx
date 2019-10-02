import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
// import { signup, login, logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  
  //TESTING
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  window.getState = store.getState;
  // window.dispatch = store.dispatch;
  //TESTING
  
  
  ReactDOM.render(<Root store={store}/>, root);
});