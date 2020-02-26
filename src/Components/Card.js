import React from "react";
import PropTypes from "prop-types";
import "../Styles/card.css";

class Cards extends React.Component {
  render() {
    return (
      <a className="card">
        <div className="image"></div>
        <div className="content">
          <h2 className="restaurant-name"></h2>
          <ul className="categories">
            <li>Healthy</li>
            <li>Western</li>
          </ul>
          <div className="info">
            <span className="price"></span>
            <span className="likes"></span>
            <span className="time"></span>
          </div>
        </div>
      </a>
    );
  }
}

export default Cards;
