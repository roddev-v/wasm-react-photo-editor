import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loadExampleWasm} from "../../utils/wasm-utils";

export const loadWasmExample = createAsyncThunk(
  'wasm/example',
  async () => {
    if (!window.wasm) {
      window.wasm = {};
    }
    window.wasm.example = await loadExampleWasm();
  }
)

export const wasmSlice = createSlice({
  name: 'wasm',
  initialState: {},
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(loadWasmExample.fulfilled, () => {
      console.log('Example WASM loaded')
    })
  })
});

export default wasmSlice.reducer;
