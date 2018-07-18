import React from 'react';
import ReactDOM from 'react-dom';

//react-native - for mobile devices
//importing css - react allows to add css in every component
import './index.css';
// import Card from './Card.js';
import 'tachyons'
import registerServiceWorker from './registerServiceWorker';
import {robots} from './robots';
import CardList from './CardList';

//create Card component
ReactDOM.render(
	<CardList robots={robots} />
, document.getElementById('root'));
registerServiceWorker();
