// React components
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// My Components
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";

// CSS
import "./App.css";
import Layout from "./Components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" exact component={Home}></Route>
          <Route path="/resume" exact component={Resume}></Route>
          <Route path="/about" exact component={Contact}></Route>
          <Route path="/projects" exact component={Projects}></Route>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
