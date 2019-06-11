import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers';
// import { App } from './components/App';
import BasicRoute from './Router';

// const store = createStore(rootReducer)

import './styles/main.scss';
ReactDOM.render(
    <BasicRoute />,
    document.getElementById('root')
);