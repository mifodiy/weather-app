import React from 'react'
import {BiSearch} from 'react-icons/bi'
import './Search.css'

const Search = () => {
	return (
		<div className='search'>
			<BiSearch size={20}/>
			<input className='search__input' placeholder='Search your trip' type='text'/>
		</div>
	)
}

export default Search