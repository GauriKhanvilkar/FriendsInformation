import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' ;
import { createStore , applyMiddleware , combineReducers} from 'redux';

import thunkMiddleware from 'redux-thunk';

import { createLogger   } from 'redux-logger';
import './index.css';
//import App from './App';
//import Hello from './Hello.js';
//import Card from './Card.js';
//import CardList from './CardList.js';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import {searchRobots , requestRobots} from './reducers.js';
//import {robots} from './robots';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Hello greating={"hello ninja"}/>, document.getElementById('root'));

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots , requestRobots}) /* combining two reducers */

const store = createStore(rootReducer , applyMiddleware(thunkMiddleware , logger));/* logger for log in console*/


ReactDOM.render(
	//<div>
	   //<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
	   //<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
	  // <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
	   
	//</div>

	//<CardList robots={robots}/> //we shifted code to App.js
	<Provider store={store}>
	 <App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
