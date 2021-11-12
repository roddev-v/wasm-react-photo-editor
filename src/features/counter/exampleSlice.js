import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const loadWasmExample = createAsyncThunk(
  'wasm/example',
  async () => {
    try {
      const memory = new WebAssembly.Memory({initial: 256, maximum: 256});
      const table = new WebAssembly.Table({initial: 0, maximum: 0, element: 'anyfunc'});
      const importObject = {
        env: {
          '__linear_memory': memory,
          '__indirect_function_table': table
        },
        wasi_snapshot_preview1: {
          'proc_exit': () => {
          }
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

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadWasmExample.fulfilled, (state, action) => {
        window.wasm = action.payload
      });
  }
});

export default exampleSlice.reducer;
