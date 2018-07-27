import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import logger from 'redux-logger'
import {myMiddleware} from '../middlewares'


export const store = createStore(rootReducer, applyMiddleware(myMiddleware, logger));

