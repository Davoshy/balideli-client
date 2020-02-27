import React from "react";
import PropTypes from "prop-types";
import "../Styles/restaurant.css";
import Axios from "axios";
import Menu from "./Menu";

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
        this.setState(
          {
            meals: res.data
          },
          () => this.calcPrice()
        );
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
  calcPrice() {
    let items = this.state.meals;
    let avg = 0;
    let itemPrices = items.map(item => {
      return item.price;
    });
    let sum = itemPrices.reduce((a, b) => a + b);
    avg = sum / items.length;
    this.setState({
      avgPrice: Math.floor(avg)
    });
  }
  unique = (value, index, self) => {
    return self.indexOf(value) === index;
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
          <Menu meals={this.state.meals} unique={this.unique} />
          {/* Basket Component*/}
        </div>
      </>
    );
  }
}

export default Restaurant;
