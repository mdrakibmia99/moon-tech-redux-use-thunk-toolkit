import {createStore} from "redux";
import productReducer from "./reducers/productReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
// create  a store 
const store=createStore(productReducer,composeWithDevTools());
export default store;