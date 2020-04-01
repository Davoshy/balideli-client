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
    let mealPrice = newMeal.price;
    if (props.meal.name) {
      this.setState({
        newItem: newMeal,
        mealPrice: newMeal.price,
        itemList: this.state.itemList.concat(newMeal),
        total: this.state.total + mealPrice
      });
    }
  }
  deleteItem(e) {
    let index = this.state.itemList.indexOf(e);
    let newItemList = this.state.itemList;
    newItemList.splice(index, 1);
    this.setState({
      itemList: newItemList,
      total: this.state.total - e.price
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
                <i
                  onClick={e => this.deleteItem(item)}
                  className="fas fa-minus"
                ></i>
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
