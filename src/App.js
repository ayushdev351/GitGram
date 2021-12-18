import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "./components/pages/Profile";
import Developer from "./components/pages/Developer";
import SignUp from "./components/pages/SignUp";
import Comparepage from "./components/pages/comparepage";
import ContactUs from "./components/pages/ContactUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/developer" exact component={Developer} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/compare-profile" exact component={Comparepage} />
        <Route path="/contact-us" exact component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
