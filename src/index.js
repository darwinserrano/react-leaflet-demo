import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      stateSanitizer: (state) => state.mapStore ? { ...state, mapStore: '<<EXCLUDED>>' } : state
    }) : compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
