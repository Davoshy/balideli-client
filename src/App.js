import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Restaurants from "./Components/Restaurants";
import Restaurant from "./Components/Restaurant";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/restaurants/:id" component={Restaurant} />
        <Route path="/" component={Restaurants} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
