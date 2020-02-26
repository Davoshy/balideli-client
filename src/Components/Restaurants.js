import React from "react";
import Nav from "./Nav";
import Card from "./Card";
import "../Styles/restaurants.css";

class Restaurants extends React.Component {
  state = {
    restaurants: [],
    categories: []
  };
  render() {
    return (
      <>
        <Nav />
        <div className="restaurants">
          {this.state.restaurants.map(rest => (
            <Card rest={rest} key={rest._id} />
          ))}
        </div>
      </>
    );
  }
}

export default Restaurants;
