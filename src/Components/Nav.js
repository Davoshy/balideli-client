import React from "react";
import "../Styles/Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="logo"></div>
        <div className="categories">
          <button>Healthy</button>
        </div>
        <div className="filter">
          <select placeholder="Sort by...">
            <option value="price">Price</option>
            <option value="time">Delivery time</option>
            <option value="likes">Likes</option>
          </select>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
    );
  }
}

export default Nav;
