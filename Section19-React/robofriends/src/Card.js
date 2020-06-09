import React, { Fragment } from 'react';

// const Card = (props) => {
const Card = ({ name, email, id }) => {
	// destructuring but we can put below in parameter above instead of props
	// const { name, email, id } = props
	return (
		<Fragment>
			<div className='athelas bg-light-purple br3 tc dib pa2 ma2 grow shadow-5 bw2'>
				<img alt='robot' src={`https://robohash.org/${id}/set_set4/?size=200x200`}/>
				<div>
					<h1 className='f4'>{name}</h1>
					<p>{email}</p>
				</div>
			</div>
		</Fragment>
	);
}

export default Card;