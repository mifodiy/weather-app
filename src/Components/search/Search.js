import React from 'react'
import {BiSearch} from 'react-icons/bi'
import './Search.css'

const Search = ({value, onChange}) => {
	return (
		<div className='search'>
			<BiSearch size={20}/>
			<input 
				className='search__input' 
				placeholder='Search your trip' 
				type='text'
				value={value}
				onChange={onChange}/>
		</div>
	)
}

export default Search