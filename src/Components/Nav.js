/*importing components and packages*/
import Axios from "axios";
import React from "react";
import "../Styles/Nav.css";

class Nav extends React.Component {
  /*temporary state - will be fetched from API later*/
  state = {
    categories: [
      {
        _id: "kh2b3423",
        name: "Western",
        color: "DD3C3E"
      },
      {
        _id: "kh245j45",
        name: "Healthy",
        color: "40C9A2"
      }
    ]
  };

  // // Api Request
  // componentWillMount() {
  //   // Getting all categories for the Nav
  //   Axios.get(`${process.env.REACT_APP_API}/categories`)
  //     .then(res => {
  //       this.setState({
  //         categories: res.data
  //       });
  //     })
  //     .catch(err => {
  //       console.log({ err });
  //     });
  // }

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
                onClick={e => this.props.filter(e)}
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
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="search"
            onChange={e => this.props.search(e)}
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
