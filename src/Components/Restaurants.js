import React from "react";
import Nav from "./Nav";

class Restaurants extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="restaurants">
          <p>The listings go here in a grid</p>
        </div>
      </>
    );
  }
}

export default Restaurants;
