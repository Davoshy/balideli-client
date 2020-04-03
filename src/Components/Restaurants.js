import React from 'react'
import axios from 'axios'

// Components
import Nav from './Nav'
import Card from './Card'

// Styles
import '../Styles/styles.css'

class Restaurants extends React.Component {
	state = {
		restaurants: [],
		filterRestaurants: [],
		categories: [],
		category_name: '',
		allMeals: [],
		sortBy: ''
	}
	//Api Request
	async componentDidMount() {
		// Getting all restaurants for the thumbnails
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
					restaurants: restaurants.data,
					filterRestaurants: restaurants.data
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
	getCategory = name => {
		this.setState(
			{
				category_name: name
			},
			() => this.setCategoryFilter()
		)
	}
	setCategoryFilter = () => {
		let allRest = this.state.restaurants
		let filterRest = this.state.restaurants.filter(r => {
			return r.category.some(e => e.name === this.state.category_name)
		})
		if (this.state.category_name == 'all') {
			this.setState({
				filterRestaurants: allRest
			})
		} else {
			this.setState({
				filterRestaurants: filterRest
			})
		}
	}
	getSort = type => {
		this.setState(
			{
				sortBy: type
			},
			() => this.setSortFilter()
		)
	}
	setSortFilter = () => {
		if (this.state.sortBy == 'price') {
			let priceSorted = this.state.filterRestaurants.sort(function(a, b) {
				return a.avgPrice - b.avgPrice
			})
			this.setState({
				filterRestaurants: priceSorted
			})
		} else if (this.state.sortBy == 'deliveryTime') {
			let timeSorted = this.state.filterRestaurants.sort(function(a, b) {
				return a.deliveryTime - b.deliveryTime
			})
			this.setState({
				filterRestaurants: timeSorted
			})
		} else if (this.state.sortBy == 'likes') {
			let likesSorted = this.state.filterRestaurants.sort(function(a, b) {
				return a.likes - b.likes
			})
			this.setState({
				filterRestaurants: likesSorted
			})
		}
	}
	getWord = word => {
		let allRests = this.state.restaurants
		let filterRest = []
		allRests.map(r => {
			if (r.name.toLowerCase().includes(word.toLowerCase()) == true) {
				filterRest.push(r)
			}
		})
		this.setState({
			filterRestaurants: filterRest
		})
	}

	render() {
		return (
			<>
				<Nav
					categories={this.state.categories}
					getCategory={e => this.getCategory(e)}
					getSort={e => this.getSort(e)}
					getWord={e => this.getWord(e)}
				/>
				<div id="page">
					{this.state.filterRestaurants.map((r, index) => {
						let filter = this.state.allMeals.filter(meal => {
							return meal.restaurant._id == r._id
						})
						let prices = filter.map(meal => meal.price)
						if (prices == []) {
							let avgPrice = 0
						} else {
							let avgPrice = Math.floor(
								prices.reduce((a, b) => a + b) / prices.length
							)
							r.avgPrice = avgPrice
							return (
								<Card
									key={index}
									restaurant={r}
									meals={filter}
									avgPrice={avgPrice}
								/>
							)
						}
					})}
				</div>
			</>
		)
	}
}

export default Restaurants
