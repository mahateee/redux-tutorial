import { legacy_createStore as createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import couterReducer from "./reducers/counterReducer";
import indexReducer from "./reducers/indexReducer";
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(indexReducer, enhancer(applyMiddleware(reduxThunk)));
export default store;
