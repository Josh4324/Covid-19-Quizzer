import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import PageNotFound from "./components/PageNotFound";
import Quiz from "./components/quiz/Quiz";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" component={Quiz} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
