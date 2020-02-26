import React from "react";
import Axios from "axios";

// Components
import Nav from "./Nav";
import Card from "./Card";

// Styles
import "../Styles/restaurants.css";

class Restaurants extends React.Component {
  // Api Request
  componentWillMount() {
    // Getting all restaurants for the thumpnails
    Axios.get(`${process.env.REACT_APP_API}/restaurants`)
      .then(res => {
        this.setState({
          restaurants: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });
    // Getting all categories for the Nav
    Axios.get(`${process.env.REACT_APP_API}/categories`)
      .then(res => {
        this.setState({
          categories: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });
  }

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
