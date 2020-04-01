import React from "react";
import PropTypes from "prop-types";
import "../Styles/styles.css";
import { Link } from "react-router-dom";
import Axios from "axios";

class Cards extends React.Component {
  state = {
    name: "",
    category: [],
    images: [],
    meals: [],
    price: 0,
    likes: 0,
    deliveryTime: 30
  };

  componentDidMount() {
    let r = this.props.restaurant;
    let rmeals = this.props.meals;
    let avgPrice = this.props.avgPrice;
    console.log(avgPrice);
    // Getting restaurant meals
    this.setState({
      name: r.name,
      category: r.category,
      images: r.images,
      deliveryTime: r.deliveryTime,
      likes: r.likes,
      price: avgPrice
    });
  }

  render() {
    return (
      <a
        href={`restaurants/${this.props.restaurant._id}`}
        className="restaurant"
      >
        <div
          className="photo"
          style={{ backgroundImage: `url(${this.state.images[0]})` }}
        ></div>
        <h3>{this.state.name}</h3>
        <ul className="categories">
          {this.state.category.map((c, i) => {
            return (
              <li key={i} style={{ backgroundColor: c.color }}>
                {c.name}
              </li>
            );
          })}
        </ul>
        <div className="info">
          <span className="price">
            <i className="fas fa-dollar-sign"></i> {this.state.price}
          </span>
          <span className="likes">
            <i className="fas fa-thumbs-up"></i>
            {this.state.likes}
          </span>
          <span className="time">
            <i className="fas fa-clock"></i>
            {this.state.deliveryTime} min
          </span>
        </div>
      </a>
    );
  }
}

export default Cards;
