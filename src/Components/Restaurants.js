import React from "react";
import Axios from "axios";

// Components
import Nav from "./Nav";
import Card from "./Card";

// Styles
import "../Styles/restaurants.css";

class Restaurants extends React.Component {

  state = {
    restaurants: [],
    categories: []
  };

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
  }


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
