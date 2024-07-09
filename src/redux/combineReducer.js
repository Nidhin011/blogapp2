import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import blogReducer from "./blogSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
});

export default rootReducer;
