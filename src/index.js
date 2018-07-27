import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'

import PathMap from './routes/routes'
import {store} from './store/store'

import './main.css'


ReactDOM.render(
    <Provider store={store}>
        <PathMap/>
    </Provider>,
    document.getElementById("root")
);
