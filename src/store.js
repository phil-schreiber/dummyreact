import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from 'redux-thunk'
// import { browserHistory } from "react-router";
// import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import { reducers } from "./reducers/index";


// add the middlewares
let middlewares = [reduxThunk];
// add the router middleware
// middlewares.push(routerMiddleware(browserHistory));


// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension());
}

// create the store
export const store = createStore(reducers, middleware);
//export const history = syncHistoryWithStore(browserHistory, store);