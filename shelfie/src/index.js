import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import server from './server';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
