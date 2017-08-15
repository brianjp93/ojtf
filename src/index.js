import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import $ from 'jquery';

window.$ = $;
window.jQuery = $;
require('materialize-css');
require('materialize-css/dist/css/materialize.min.css');




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
