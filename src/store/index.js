import {createStore, combineReducers} from "redux";
import {cashReducer} from "./cashReducer";
import {customerReducer} from "./customerReducer";
import { composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    customerReducer,
    cashReducer,
})


export const store = createStore(rootReducer, composeWithDevTools())