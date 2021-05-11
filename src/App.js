import React from "react";
import './App.css';
import Wrapper from "./components/wrapper"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navigation from "./components/nav"
import homePage from "./pages/about"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"

function App() {
  return (
    <Router>
      <Navigation />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={homePage}/>
          <Route exact path="/About" component={homePage}/>
          <Route exact path="/Portfolio" component={Portfolio}/>
          <Route exact path="/Contact" component={Contact}/>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
