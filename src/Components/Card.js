import React from "react";
import PropTypes from "prop-types";
import "../Styles/card.css";
import { Link } from "react-router-dom";

class Cards extends React.Component {
  render() {
    return (
      <Link className="card" to={`/restaurants/${this.props.rest._id}`}>
        <div
          className="image"
          style={{ background: `url(${this.props.rest.image})` }}
        ></div>
        <div className="content">
          <h2 className="restaurant-name">{this.props.rest.name}</h2>
          <ul className="categories">
            {this.props.rest.category.map((cat, i) => (
              <li key={i}>{cat}</li>
            ))}
          </ul>
          <div className="info">
            <span className="price"></span>
            <span className="likes">{this.props.rest.likes}</span>
            <span className="time">{this.props.rest.deliveryTime}min</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default Cards;
