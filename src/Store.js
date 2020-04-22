import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import Todos from "./Reducers/TodosReducers";
import Post from "./Reducers/PostReducers";
import Counter from "./Reducers/CounterReducers";

export default createStore(
  combineReducers({ Todos: Todos, Post: Post, Counter: Counter }),
  applyMiddleware(thunk)
);
