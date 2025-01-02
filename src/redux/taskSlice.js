import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch tasks from API
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data.slice(0, 10);
});

// Task slice for Redux store
const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {

    // Add a new task
    addTask: (state, action) => {
      state.push({ ...action.payload, id: state.length + 1 });
    },

    // Edit a task
    editTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index] = { ...state[index], ...action.payload };
    },

    // Delete a task
    deleteTask: (state, action) => state.filter((task) => task.id !== action.payload),
  },

  // Extra reducers for fetching tasks
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => action.payload);
  },
});

export const { addTask, editTask, deleteTask } = taskSlice.actions;
export const selectTasks = (state) => state.tasks;
export default taskSlice.reducer;
