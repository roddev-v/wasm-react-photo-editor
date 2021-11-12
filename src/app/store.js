import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/exampleSlice';
import coreReducer from '../features/core/coreSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    core: coreReducer
  },
});
