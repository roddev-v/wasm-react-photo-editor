import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  imageURL: '',
  imageBytes: [],
  isLoading: false
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    storeImageURL: (state, action) => {
      state.imageURL = action.payload;
    },
    storeImageBytes: (state, action) => {
      state.imageBytes = action.payload;
    },
    removeStoredImage: (state) => {
      state.imageURL = '';
      state.imageBytes = [];
    },
    showLoadingSpinner: (state) => {
      state.isLoading = true;
    },
    hideLoadingSpinner: (state) => {
      state.isLoading = false;
    }
  }
})

export default coreSlice.reducer;

export const {
  storeImageURL,
  storeImageBytes,
  removeStoredImage,
  showLoadingSpinner,
  hideLoadingSpinner
} = coreSlice.actions;

export const selectIsLoading = (state) => state.core.isLoading;

export const selectStoredImage = (state) => state.core.imageURL;
