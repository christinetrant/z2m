import React from 'react'

const Scroll = (props) => {
	// return props.children
	return (
		<div style={{overflowY: 'scroll', border: '2px solid blue', height: '82vh'}}>
			{props.children}
		</div>
	)
}

export default Scroll;