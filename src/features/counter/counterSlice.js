import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchCount} from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const loadWasmExample = createAsyncThunk(
  'wasm/example',
  async () => {
    try {
      const memory = new WebAssembly.Memory({initial: 256, maximum: 256});
      const table = new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' });
      const importObject = {
        env: {
          '__linear_memory': memory,
          '__indirect_function_table': table
        },
        wasi_snapshot_preview1: {
          'proc_exit': () => {}
        }
      }
      const responsePromise = await fetch('./wasm/example.wasm')
      const buffer = await responsePromise.arrayBuffer();
      const wasm = await WebAssembly.instantiate(buffer, importObject);
      console.log(wasm.instance.exports);
    } catch (e) {
      console.log(e);
    }
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadWasmExample.fulfilled, (state, action) => {
        window.wasm = action.payload
      });
  }
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default counterSlice.reducer;
