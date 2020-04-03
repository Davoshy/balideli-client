/*importing components and packages*/
import Axios from 'axios'
import React from 'react'
import '../Styles/styles.css'

class Nav extends React.Component {
	/*temporary state - will be fetched from API later*/
	state = {
		categories: []
	}

	componentWillReceiveProps(props) {
		let allCategories = props.categories
		this.setState({
			categories: allCategories
		})
	}

	selectCategory = e => {
		this.props.getCategory(e.target.value)
	}

	setSort = e => {
		this.props.getSort(e.target.value)
	}

	setSearchWord = e => {
		this.props.getWord(e.target.value)
	}
	render() {
		return (
			<nav>
				<div
					id="logo"
					style={{
						backgroundImage: `url('https://i.ibb.co/frKY3LM/33f83d95-aeb9-4a8c-a7bc-945ed1fe3172-200x200.png')`
					}}
				></div>

				<ul>
					<label for="cuisin"> Prefered Cuisin: </label>
					<select id="cuisin" onChange={this.selectCategory}>
						<option value="all">Select All</option>
						{this.state.categories.map((c, i) => {
							return (
								<option value={c.name} key={i}>
									{c.name}
								</option>
							)
						})}
					</select>
				</ul>
				<select onChange={this.setSort}>
					<option value="">Sort by:</option>
					<option value="price">Price</option>
					<option value="deliveryTime">Delivery Time</option>
					<option value="likes">Likes</option>
				</select>
				<input
					onChange={this.setSearchWord}
					type="text"
					placeholder="Search..."
				/>
			</nav>
		)
	}
}

export default Nav
