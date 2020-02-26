import React from "react";
import PropTypes from "prop-types";
import "../Styles/restaurant.css";
import Axios from "axios";

class Restaurant extends React.Component {
  state = {
    restaurant: {},
    meals: [],
    categories: []
  };

  // Api Request
  componentWillMount() {
    // Getting single restaurant
    Axios.get(
      `${process.env.REACT_APP_API}/restaurants/${this.props.match.params.id}`
    )
      .then(res => {
        console.log(res.data);
        this.setState({
          restaurant: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });

    // Getting all meals
    Axios.get(`${process.env.REACT_APP_API}/meals`)
      .then(res => {
        this.setState({
          meals: res.data
        });
      })
      .catch(err => {
        console.log({ err });
      });

    // Getting categories
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
        <div id="restaurant">
          <div>
            <h1>Peloton</h1>
            <div id="gallery">
              {[...Array(4)].map((image, index) => {
                return (
                  <div
                    class="photo"
                    style={{
                      backgroundImage: `url(${this.state.images[index]})`
                    }}
                  ></div>
                );
              })}
              <div
                class="photo"
                style="background-image: url('https://bit.ly/2RATsdq')"
              ></div>
            </div>
            <ul class="categories"></ul> //categories component goes here
            <div class="info">
              <span class="price">
                <i class="fas fa-dollar-sign"></i>20
              </span>
              <span class="likes">
                <i class="fas fa-thumbs-up"></i>347
              </span>
              <span class="time">
                <i class="fas fa-clock"></i>20 min
              </span>
            </div>
          </div>
          <div id="meals"></div> //meals component goes here
          <div id="basket"></div> //basket component goes here
        </div>
      </>
    );
  }
}

export default Restaurant;
