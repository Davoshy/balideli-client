import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Restaurants from "./Components/Restaurants";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Restaurants} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
