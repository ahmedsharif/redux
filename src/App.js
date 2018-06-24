import React, { Component } from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import "./App.css";

function App() {
  return (
    <div>const store = configureStore(); console.log(store.getState());</div>
  );
}

export default App;
