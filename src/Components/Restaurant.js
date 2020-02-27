import React from "react";
import PropTypes from "prop-types";
import "../Styles/restaurant.css";
import Axios from "axios";

class Restaurant extends React.Component {
  state = {
    restaurant: {
      name: "",
      images: [],
      category: [],
      deliveryTime: 30,
      likes: 0
    },
    meals: [],
    avgPrice: 0
  };

  // Api Request
  componentWillMount() {
    // Getting single restaurant
    Axios.get(
      `${process.env.REACT_APP_API}/restaurants/${this.props.match.params.id}`
    )
      .then(res => {
        console.log(res.data.category);
        this.setState({
          restaurant: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    // Getting all meals
    Axios.get(`${process.env.REACT_APP_API}/meals`)
      .then(res => {
        console.log(res.data);
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
  componenDidMount() {
    this.calcPrice();
  }

  calcPrice = () => {
    let items = this.state.meals.length;
    let itemPrices = items.map(item => {
      return item.price;
    });
    let sum = itemPrices.reduce((a, b) => a + b);
    this.setState({
      avgPrice: sum / items
    });
  };

  render() {
    return (
      <>
        <div id="restaurant">
          <div>
            <h1>{this.state.restaurant.name}</h1>
            <div id="gallery">
              {[...Array(this.state.restaurant.images.length)].map(
                (image, i) => {
                  return (
                    <div
                      key={i}
                      className="photo"
                      style={{
                        backgroundImage: `url(${this.state.restaurant.images[i]})`
                      }}
                    ></div>
                  );
                }
              )}
              <ul className="categories">
                {this.state.restaurant.category.map(category => {
                  return (
                    <li
                      key={category._id}
                      style={{ backgroundColor: category.color }}
                    >
                      {category.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="info">
              <span className="price">
                <i className="fas fa-dollar-sign"></i>
                {this.state.avgPrice}
              </span>
              <span className="likes">
                <i className="fas fa-thumbs-up"></i>347
              </span>
              <span className="time">
                <i className="fas fa-clock"></i>20 min
              </span>
            </div>
          </div>
          {/* Menu Component*/}
          {/* Basket Component*/}
        </div>
      </>
    );
  }
}

export default Restaurant;
