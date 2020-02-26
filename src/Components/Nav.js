import React from "react";
import "../Styles/Nav.css";

class Nav extends React.Component {
  // Api Request
  componentWillMount() {
    // Getting all categories for the Nav
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
