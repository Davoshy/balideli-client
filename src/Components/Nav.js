/*importing components and packages*/
import Axios from "axios";
import React from "react";
import "../Styles/Nav.css";

class Nav extends React.Component {
  /*temporary state - will be fetched from API later*/
  state = {
    categories: []
  };

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
        {/*Logo*/}
        <div className="logo"></div>
        {/*Categories*/}
        <div className="categories">
          {this.state.categories.map(cat => (
            <a
              key={cat._id}
              className="cat-button"
              href="/"
              style={{ borderColor: `#${cat.color}` }}
            >
              <span
                style={{ color: `#${cat.color}` }}
                key={cat._id}
                value={cat.name}
              >
                {cat.name}
              </span>
            </a>
          ))}
        </div>
        {/*Filter*/}
        <div className="filter">
          <select placeholder="Sort by...">
            <option value="price">Price</option>
            <option value="time">Delivery time</option>
            <option value="likes">Likes</option>
          </select>
        </div>
        {/*Search*/}
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
    );
  }
}

export default Nav;
