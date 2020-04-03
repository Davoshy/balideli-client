import React from 'react'
import Nav from './Nav'
import Card from './Card'
import axios from 'axios'
import '../Styles/styles.css'

class Categories extends React.Component {
	state = {
		restaurants: [],
		categories: [],
		allMeals: []
	}
	async componentDidMount() {
		const getMeals = await axios
			.get(`${process.env.REACT_APP_API}/meals`)
			.then(meals => {
				this.setState({
					allMeals: meals.data
				})
			})
		const getRests = await axios
			.get(`${process.env.REACT_APP_API}/restaurants`)
			.then(restaurants => {
				this.setState({
					restaurants: restaurants.data
				})
			})
		const getCateg = await axios
			.get(`${process.env.REACT_APP_API}/categories`)
			.then(categories => {
				this.setState({
					categories: categories.data
				})
			})
	}

	render() {
		console.log(this.state.restaurants)
		return (
			<>
				<Nav categories={this.state.categories} />

				<div id="page"></div>
			</>
		)
	}
}

export default Categories
