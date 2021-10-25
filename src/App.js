import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import HowItWorks from "./Pages/HowItWorks";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";
import NotFound from "./Pages/404";

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute exact={true} path={"/"} component={Home} />
          <ScrollToTopRoute path="/how-it-works" component={HowItWorks} />
          <ScrollToTopRoute path="/team" component={Team} />
          <ScrollToTopRoute path="/contact" component={Contact} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
