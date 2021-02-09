import React from "react";
import "./App.css";
import Home from "./components/Home";
import Report from "./components/Report";
import Demo from "./components/Demo"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App" data-barba="container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/report" exact component={Report} />
          <Route path="/demo" exact component={Demo} />
        </Switch>
      </Router>
    </div>
  );
}