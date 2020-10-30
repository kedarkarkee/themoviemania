import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";
import reducer from "./reducer";
// @ts-ignore
const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store;