import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './App';
import mainReducer from './reducers/mainReducer'
import fetchTodos from './actions/fetchTodos'

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware))

store.dispatch(fetchTodos())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
