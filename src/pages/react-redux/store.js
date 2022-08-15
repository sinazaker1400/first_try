import {createStore, applyMiddleware} from "redux";
import villaReducer from "./reducers/villaReducer";
import thunk from "redux-thunk";
import { createPromise } from "redux-promise-middleware"

export default createStore(villaReducer,applyMiddleware(thunk, createPromise()));