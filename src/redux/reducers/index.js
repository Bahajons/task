import { combineReducers } from "redux";
import { myReducers } from "./reducers";

export const rootReducer = combineReducers({
    store: myReducers,
});