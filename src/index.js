import React from 'react';
import ReactDOM from 'react-dom';

//react-native - for mobile devices
//importing css - react allows to add css in every component
import './index.css';
// import Card from './Card.js';
import 'tachyons'
import registerServiceWorker from './registerServiceWorker';
// import {robots} from './robots';
import App from './containers/App';

//create Card component
ReactDOM.render(
	<App />
, document.getElementById('root'));
registerServiceWorker();
