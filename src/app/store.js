import {configureStore} from '@reduxjs/toolkit';
import coreReducer from '../features/core/coreSlice';
import wasmReducer from '../features/core/wasmSlice';

export const store = configureStore({
  reducer: {
    wasm: wasmReducer,
    core: coreReducer
  },
});
