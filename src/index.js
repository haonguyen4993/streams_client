import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import App from './components/App';
import reducers from './reducers';
import mySaga from './saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);

ReactDOM.render(
	<Provider store={store}>
  	<App />
	</Provider>,
  document.querySelector('#root')
);
