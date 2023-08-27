import {createStore} from "redux";
import productReducer from "./reducers/productReducer";
// create  a store 
const store=createStore(productReducer);
export default store;