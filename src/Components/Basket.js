import React from "react";

class Basket extends React.Component {
  state = {
    newItem: {},
    mealPrice: 0,
    itemList: [],
    total: 0
  };

  componentWillReceiveProps(props) {
    let newMeal = props.meal;
    this.setState({
      newItem: newMeal,
      mealPrice: newMeal.price,
      itemList: this.state.itemList.concat(newMeal)
    });
  }

  render() {
    return (
      <div id="basket">
        <h2>Your Basket</h2>
        <ul>
          {this.state.itemList.map((item, i) => {
            return (
              <li key={i}>
                <i className="fas fa-minus"> - </i>
                <span className="name">{item.name}</span>
                <span className="price">{item.price} IDR</span>
              </li>
            );
          })}
        </ul>
        <div id="total">
          <span>Total</span>
          <span className="price">{this.state.total} IDR</span>
          <button>Place Order</button>
        </div>
      </div>
    );
  }
}

export default Basket;
