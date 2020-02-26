import React from "react";
import PropTypes from "prop-types";
import "../Styles/restaurant.css";

class Restaurant extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div id="restaurant">
          <div>
            <h1>Peloton</h1>
            <div id="gallery">
              <div
                class="photo"
                style="background-image: url('https://bit.ly/2RXsprv')"
              ></div>
              <div
                class="photo"
                style="background-image: url('https://bit.ly/2O622yD')"
              ></div>
              <div
                class="photo"
                style="background-image: url('https://bit.ly/38FaBbs')"
              ></div>
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
