// import { combineReducers } from '@reduxjs/toolkit';
// import authReducer from './authSlice';
// import blogReducer from './blogSlice'; // Example: If you have a blog slice

// const rootReducer = combineReducers({
//   auth: authReducer,
//   blog: blogReducer,
//   // Add more reducers as needed
// });

// export default rootReducer;
// store/combineReducer.js
import { combineReducers } from '@reduxjs/toolkit';
 import authReducer from './authSlice';
 import blogReducer from './blogSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  // Add more reducers as needed
});

export default rootReducer;
