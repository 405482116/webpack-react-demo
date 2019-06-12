import { combineReducers } from "redux";
import visibilityFilter from "./todo.filter";
import todos from "./todos";

export default combineReducers({ todos, visibilityFilter });
