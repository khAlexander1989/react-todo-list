import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksInitialState = [
  { id: nanoid(), text: 'Learn HTML and CSS', completed: true },
  { id: nanoid(), text: 'Get good at JavaScript', completed: true },
  { id: nanoid(), text: 'Master React', completed: false },
  { id: nanoid(), text: 'Discover Redux', completed: false },
  { id: nanoid(), text: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, { payload }) {
        return [payload, ...state];
      },
      prepare(taskText) {
        return {
          payload: {
            id: nanoid(),
            text: taskText,
            completed: false,
          },
        };
      },
    },

    deleteTask(state, { payload }) {
      return [...state].filter(task => task.id !== payload);
    },

    toggleCompleted(state, { payload }) {
      return state.map(task => {
        if (task.id === payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
