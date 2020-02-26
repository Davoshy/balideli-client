import React from "react";
import "../Styles/Nav.css";

class Nav extends React.Component {

  state = {
    categories: [
      {
        id: "kh2b3423",
        name: "Western",
        color: "DD3C3E"
      },
      {
        id: "kh245j45",
        name: "Healthy",
        color: "40C9A2"
      }
    ]
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
        <div className="logo"></div>
        <div className="categories">
          {this.state.categories.map(cat => (
            <a
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
