import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import * as reducers from '../reducers';

export default function configureStore() {
  const reducer = combineReducers({
    ...reducers,
    routing: routeReducer,
  });
  const reduxRouterMiddleware = syncHistory(browserHistory);
  const createStoreWithMiddleware =
    applyMiddleware(reduxRouterMiddleware, thunkMiddleware, createLogger)(createStore);
  const store = createStoreWithMiddleware(reducer);

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
