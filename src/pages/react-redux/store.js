import {createStore, applyMiddleware} from "redux";
import villaReducer from "./reducers/villaReducer";
import thunk from "redux-thunk";
import { createPromise } from "redux-promise-middleware"
import logger from 'redux-logger'

export default createStore(villaReducer,applyMiddleware(thunk, createPromise(),logger));