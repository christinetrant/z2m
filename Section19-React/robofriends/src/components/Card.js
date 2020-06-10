import React, { Fragment } from 'react';

// const Card = (props) => {
const Card = ({ name, email, id }) => {
	// destructuring but we can put below in parameter above instead of props
	// const { name, email, id } = props
	return (
		<Fragment>
			<div className='athelas bg-light-green br3 tc dib pa2 ma2 grow shadow-5 bw2'>
				<img alt='robot' src={`https://robohash.org/${id}/set_set2/?size=200x200`}/>
				<div>
					<h4 className='f4'>{name}</h4>
					<p>{email}</p>
				</div>
			</div>
		</Fragment>
	);
}

export default Card;