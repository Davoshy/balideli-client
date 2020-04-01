/*importing components and packages*/
import Axios from "axios";
import React from "react";
import "../Styles/styles.css";

class Nav extends React.Component {
  /*temporary state - will be fetched from API later*/
  state = {
    categories: []
  };

  componentWillReceiveProps(props) {
    let allCategories = props.categories;
    this.setState({
      categories: allCategories
    });
  }

  render() {
    return (
      <nav>
        <div
          id="logo"
          style={{ backgroundImage: `url('https://bit.ly/2S2G7JA')` }}
        ></div>

        <ul>
          {this.state.categories.map((c, i) => {
            return (
              <li>
                <a
                  key={i}
                  href={`/categories/${c._id}`}
                  style={{ borderColor: c.color }}
                >
                  <span style={{ color: c.color }}>{c.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <select>
          <option value="">Sort by:</option>
          <option value="">Price</option>
          <option value="">Delivery Time</option>
          <option value="">Likes</option>
        </select>
        <input type="text" placeholder="Search..." />
      </nav>
    );
  }
}

export default Nav;
