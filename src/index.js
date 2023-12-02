import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import store from './kho_redux/kho_luu_store'; //import kho vào index.js
import { Provider } from 'react-redux'; //

ReactDOM.render(
    //truyền kho vào
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);