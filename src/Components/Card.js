import React from "react";
import PropTypes from "prop-types";
import "../Styles/card.css";
import { Link } from "react-router-dom";

class Cards extends React.Component {
  state = {
    rest: this.props.rest
  };

  render() {
    return (
      <Link className="card" to={`/restaurants/${this.state.rest._id}`}>
        <div
          className="image"
          style={{ background: `url(${this.state.rest.image})` }}
        ></div>
        <div className="content">
          <h2 className="restaurant-name">{this.state.rest.name}</h2>
          <ul className="categories">
            {this.state.rest.categories.map(category => (
              <li key={category._id}>category._id</li>
            ))}
          </ul>
          <div className="info">
            <span className="price">{this.state.rest.likes}</span> /* need to
            update with avg.price calc */
            <span className="likes">{this.state.rest.likes}</span>
            <span className="time">{this.state.rest.deliveryTime}</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default Cards;
