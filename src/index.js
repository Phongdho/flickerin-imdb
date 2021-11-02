import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import NavBar from "./Components/NavBar/NavBar";

ReactDOM.render(
  <Router>
    <NavBar></NavBar>
    <App />
  </Router>,
  document.getElementById("root")
);
