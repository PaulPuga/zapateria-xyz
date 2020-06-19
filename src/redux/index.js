import { combineReducers } from "redux";
// import { connectRouter } from "connected-react-router";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

//Reducer imports here
// import authentication from "./reducers/authentication";
// import customers from "./reducers/customers";
// import products from "./reducers/products";
// import warehouses from "./reducers/warehouses";
// import orders from "./reducers/orders";
// import users from "./reducers/users";
// import decreases from './reducers/decreases'
// import sellmode from './reducers/sellmode'

const rootReducer = combineReducers({
  // authentication,
  // customers,
  // products,
  // warehouses,
  // orders,
  // users,
  // decreases,
  // sellmode
});

export default persistReducer(persistConfig, rootReducer);
