import React from "react";
import Nav from "./Nav";
import Card from "./Card";
import "../Styles/restaurants.css";

class Restaurants extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="restaurants">
          {[...Array(7)].map((e, i) => (
            <Card key={i} />
          ))}
        </div>
      </>
    );
  }
}

export default Restaurants;
