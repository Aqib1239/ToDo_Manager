import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../redux/taskSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
