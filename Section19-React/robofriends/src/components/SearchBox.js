import React from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<input 
			type='search' 
			placeholder='search for robots' 
			className='bg-washed-blue br2 pa2 mb2' 
			onChange={searchChange}
		/>
	);
}

export default SearchBox;