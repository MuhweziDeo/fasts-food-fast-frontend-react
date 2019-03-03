import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const intialState = {};
const middleware = [thunk];

const store = createStore(reducers,intialState, composeWithDevTools(applyMiddleware(thunk)))

export default store;
