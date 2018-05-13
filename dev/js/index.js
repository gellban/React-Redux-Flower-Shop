import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';//import store class from redux database library
import allReducers from './reducers';//get all states

import {Provider} from 'react-redux';
import App from './components/app';//import the main full page of the website
console.log('dev/js/index.js: start');
const store = createStore(allReducers);//states one database location
console.log(store.getState());//show all states on the console

ReactDOM.render(
    <div>
        <h1> Bouquet Profile View Website</h1>
        <Provider store = {store}>
            <App/>
        </Provider>
    </div>
    ,
    document.getElementById('root')
);
