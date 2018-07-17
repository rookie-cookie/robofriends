import React from 'react';
import ReactDOM from 'react-dom';
//react-native - for mobile devices
//importing css - react allows css to be added in every component
import './index.css';
import Card from './Card';
import 'tachyons'
import registerServiceWorker from './registerServiceWorker';

//create Card component
ReactDOM.render(<Card />, document.getElementById('root'));
registerServiceWorker();
