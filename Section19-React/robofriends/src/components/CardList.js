import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	// to test the error we can create one below to test our ErrorBoundry
	// if(true) {
	// 	throw new Error('Oopsies!');
	// }
	// rather than calling each card by index we map to create a new array
	// In the console we get an error: Warning: Each child in a list should have a unique "key" prop. so we add a unique key e.g. the id
	// const CardArray = robots.map((user, i) => {
	// 	return (
	// 		<Card 
	// 			key={robots[i].id} 
	// 			id={robots[i].id} 
	// 			name={robots[i].name} 
	// 			email={robots[i].email} 
	// 		/>
	// 	)
	// })
	return (
		<div>
			{/*{ CardArray }*/}
			{
				robots.map((user, i) => {
					return (
						<Card 
							key={robots[i].id} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email} 
						/>
					)
				})
			}
			{/*<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
				    <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
				    <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />*/}
	   </div>
	);
}

export default CardList;