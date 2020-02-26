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
    originalRests: [],
    categories: []

  };

  //Api Request
  componentWillMount() {
    // Getting all restaurants for the thumpnails
    Axios.get(`${process.env.REACT_APP_API}/restaurants`)
      .then(res => {
        this.setState({
          restaurants: res.data,
          originalRests: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });
  }

  search = e => {
    let input = e.target.value;
    let sortedRests = this.state.originalRests.filter(rest => {
      return (
        rest.name.toLowerCase().includes(input) ||
        rest.category.toLowerCase().includes(input)
      );
    });
    this.setState({ restaurants: sortedRests });
  };

  render() {
    return (
      <>
        <Nav search={this.search} />
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
