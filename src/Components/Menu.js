import React from "react";

class Menu extends React.Component {
  state = {
    groups: [],
    mealArray: []
  };
  componentWillReceiveProps(props) {
    let mealArr = props.meals;
    let unique = props.unique;
    let groupArr = mealArr.map(meal => meal.group);
    let uniqueGroups = groupArr.filter(unique);
    let arrayFull = [];

    for (let i = 0; i < uniqueGroups.length; i++) {
      arrayFull.push(mealArr.filter(meal => meal.group == uniqueGroups[i]));
    }
    console.log(arrayFull);
    this.setState({
      groups: uniqueGroups,
      mealArray: arrayFull
    });
  }

  render() {
    return (
      <>
        <div id="menu">
          <h2>Menu</h2>
          {this.state.groups.map((name, index) => {
            return (
              <div key={index}>
                <h3 key={index}>{name}</h3>
                <ul>
                  {this.state.mealArray[index].map((meal, i) => {
                    return (
                      <li key={i}>
                        <span className="name">{meal.name}</span>
                        <span className="price">
                          {meal.price} IDR<i className="fas fa-plus"></i>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Menu;
