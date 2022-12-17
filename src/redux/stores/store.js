import { applyMiddleware, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import { movieReducers } from "../reducers/movieReduces";


export const store = legacy_createStore(movieReducers, applyMiddleware(thunk));