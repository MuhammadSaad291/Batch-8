// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {
//     // todos: todosReducer,
//   }
// })












import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer
  }
});
