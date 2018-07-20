import React from 'react';
import Card from './Card';

const Cardlist = ({robots}) => {
// use javascipt map  when looping or returning multiple components 
return (
	<div>
		{
			robots.map((user,i) => {
			//in react, remember to add a key prop, this will allow react to know if a component is deleted
			//react will keep track and therefore not have to rerun the entire dom is something changes
			return (
			 <Card 
				 key={i} 
				 id={robots[i].id} 
				 name={robots[i].name} 
				 email={robots[i].email} 
			 />
	 	)
			})
	}
	</div>
	);
}

export default Cardlist;