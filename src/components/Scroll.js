import React from 'react';

//children, every props has children 
//ex props.children

const Scroll = (props) => {
	//create scrollable component
	return (
		<div style={{overflowY: 'scroll', height: '800px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;