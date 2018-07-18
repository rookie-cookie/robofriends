import React from 'react';
import ReactDOM from 'react-dom';

//react-native - for mobile devices
//importing css - react allows to add css in every component
import './index.css';
import Card from './Card.js';
import 'tachyons'
import registerServiceWorker from './registerServiceWorker';
import {robots} from './robots';

//create Card component
ReactDOM.render(
	<div>
		<Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
		<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
		<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
		<Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
	</div>
, document.getElementById('root'));
registerServiceWorker();
