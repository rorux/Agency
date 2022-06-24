import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { companyReducer } from "./companies/reducer";
import { contactReducer } from "./contacts/reducer";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    company: companyReducer,
    contact: contactReducer,
  }),
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
