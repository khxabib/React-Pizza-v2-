import React from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart.jsx'
import { Route, Routes } from 'react-router-dom'

// import pizzas from './assets/pizzas.json'

// https://64a28e59b45881cc0ae55888.mockapi.io/items

function App() {
	

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/cart' element={<Cart/>}/>
					<Route path='*' element={<NotFound/>}/>
				</Routes>
					
				</div>
			</div>
		</div>
	)
}

export default App
