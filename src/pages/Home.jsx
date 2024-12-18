import React from 'react'
import Categories from '../components/Categories.jsx'
import Sort from '../components/Sort'
import PizzBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/LoadingBlock.jsx'

const Home = () => {
	const [items, setItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(true)
	const [categoryId, setCategoryId] = React.useState(0)
	const [sortType, setSortType] = React.useState(0)

	React.useEffect(() => {
		setIsLoading(true)
		fetch(
			'https://64a28e59b45881cc0ae55888.mockapi.io/items?category=' + categoryId
		)
			.then(res => res.json())
			.then(item => {
				setItems(item)
				setIsLoading(false)
			})
		window.scrollTo(0, 0)
	}, [categoryId])

	return (
		<div className='content'>
			<div className='content__top'>
				<Categories
					value={categoryId}
					onChangeCategory={i => setCategoryId(i)}
				/>
				<Sort value={sortType} onChangeSort={i => setSortType(i)} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: items.map(obj => <PizzBlock key={obj.id} {...obj} />)}
			</div>
		</div>
	)
}

export default Home
