import React, { Component } from 'react';
import Card from './Card';


//make componets like functions
const CardList = ({ robots })=>{
    const cardComponets = robots.map((user,i)=>{

    	return (
    		<Card 
    		key={i} 
    		id={robots[i].id} 
    		name={robots[i].name} 
    		email={robots[i].email}/>
    		);

    })

        return(
          <div>
	        {cardComponets}
	      </div>

    	);
}

export default CardList;