import React from 'react'
import PropTypes from 'prop-types'
import '../Styles/styles.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'

class Cards extends React.Component {
	state = {
		name: '',
		category: [],
		images: [],
		meals: [],
		price: 0,
		likes: 0,
		deliveryTime: 30,
		restaurant_id: ''
	}

	componentDidMount() {
		this.setState({
			name: this.props.restaurant.name,
			category: this.props.restaurant.category,
			images: this.props.restaurant.images,
			deliveryTime: this.props.restaurant.deliveryTime,
			likes: this.props.restaurant.likes,
			price: this.props.avgPrice,
			restaurant_id: this.props.restaurant._id
		})
	}
	componentWillReceiveProps(props) {
		this.setState({
			name: props.restaurant.name,
			category: props.restaurant.category,
			images: props.restaurant.images,
			deliveryTime: props.restaurant.deliveryTime,
			likes: props.restaurant.likes,
			price: props.avgPrice,
			restaurant_id: props.restaurant._id
		})
	}

	render() {
		return (
			<a
				href={`restaurants/${this.state.restaurant_id}`}
				className="restaurant"
			>
				<div
					className="photo"
					style={{ backgroundImage: `url(${this.state.images[0]})` }}
				></div>
				<h3>{this.state.name}</h3>
				<ul className="categories">
					{this.state.category.map((c, i) => {
						return (
							<li key={i} style={{ backgroundColor: c.color }}>
								{c.name}
							</li>
						)
					})}
				</ul>
				<div className="info">
					<span className="price">
						<i className="fas fa-dollar-sign"></i> {this.state.price}
					</span>
					<span className="likes">
						<i className="fas fa-thumbs-up"></i>
						{this.state.likes}
					</span>
					<span className="time">
						<i className="fas fa-clock"></i>
						{this.state.deliveryTime} min
					</span>
				</div>
			</a>
		)
	}
}

export default Cards
