import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
import Restaurants from './Components/Restaurants'
import Restaurant from './Components/Restaurant'
import Categories from './Components/Categories'

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/restaurants/:id" component={Restaurant} />
					<Route path="/categories/:id" component={Categories} />
					<Route path="/" component={Restaurants} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App
