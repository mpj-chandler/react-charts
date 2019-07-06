import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './App';

let HotApp = App;

if (module.hot) {
    HotApp = hot(module)(App);
}

ReactDOM.render(<HotApp/>, document.getElementById('root'));

