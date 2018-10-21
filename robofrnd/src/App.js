import React, { Component } from 'react';

import {connect} from 'react-redux';
import CardList from './CardList.js';
import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

import {setSearchField , requestRobots} from './actions.js'
//making componet as class

const mapStateToProps = state=>{
	return{
		searchFeild: state.searchRobots.searchFeild,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}

}

const mapDispatchToProps = (dispatch) =>{
	return {
		onSearchChange:(event) =>dispatch(setSearchField(event.target.value)),
		onRequestRobots:() => dispatch(requestRobots())
	}
}

class App extends Component{
	/*constructor(){
		super()
		this.state={
			robots : [],
			searchFeild:''     ........ not needed as we are using connect() mapDispatchToProps of redux 
		}
	}      .... no need of constructor*/
    
	componentDidMount(){
	{/* anding robots .... this runs after constructor*/}
	{/*this.setState({robots:robots}) ...
    removing this will directly add from website.....
    no need of robots.js anymore*/}
   
     /*fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=>{
       	return response.json();
       })
       .then(users =>{
          this.setState({robots: users})
       });     ...............  not needed as we are using redux */

       this.props.onRequestRobots();
	}

	/* onSearchChange = (event)=>{
       console.log(event.target.value);
       this.setState({ searchFeild : event.target.value })
	}  ........ not needed as we are using connect() mapDispatchToProps of redux */

	render(){
       const { searchFeild , onSearchChange , robots , isPending } = this.props; /* coming from props */

	   const filterRobots = robots.filter(robots =>{
		return robots.name.toLowerCase().includes(searchFeild.toLowerCase());
	   })

	   if(robots.length === 0){
          return <h1 className='tc'>Loading</h1>
	   }else{

	      return(

		  <div className='tc'>
		    
		    <h1 className='f2'>RoboFriends</h1>
            <SearchBox searchChange ={ onSearchChange}/>
		    {/*<CardList robots={robots}/>  //now we are using state*/}
		    {/*<CardList robots={this.state.robots}/> changed for state use*/}
		    <Scroll>
		      <CardList robots={filterRobots}/>
            </Scroll>
		  </div>    


		  );
	    }
}
}

export default connect(mapStateToProps , mapDispatchToProps)(App);