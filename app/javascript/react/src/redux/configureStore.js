import {
  applyMiddleware,
  configureStore,
  getDefaultMiddleware
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import messageReducer from './message.js';

// Redux store
const store = configureStore(
  {
    reducer: {
      message: messageReducer,
    },
    middleware: [...getDefaultMiddleware(), logger]
  },
);

export default store;