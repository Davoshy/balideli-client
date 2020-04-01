import React from "react";
import Nav from "./Nav";
import Card from "./Card";

class Categories extends React.Component {
  state = {
    restaurants: [],
    categories: []
  };
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API}/restaurants`).then(restaurants => {
      this.setState({
        restaurants: restaurants.data
      });
    });
    axios.get(`${process.env.REACT_APP_API}/categories`).then(categories => {
      this.setState({
        categories: categories.data
      });
    });
  }
  render() {
    return (
      <>
        <Nav categories={this.state.categories} />
        <div id="page">
          {this.state.restaurants.map((r, index) => {
            let filter = this.state.allMeals.filter(meal => {
              return meal.restaurant._id == r._id;
            });
            let prices = filter.map(meal => meal.price);
            let avgPrice = Math.floor(
              prices.reduce((a, b) => a + b) / prices.length
            );
            return (
              <Card
                key={index}
                restaurant={r}
                meals={filter}
                avgPrice={avgPrice}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Categories;
