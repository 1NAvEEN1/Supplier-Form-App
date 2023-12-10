import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "error",
  initialState: {
    basicDetails: [],
  },
  reducers: {
    setErrorsBasicDetails: (state, action) => {
      state.basicDetails = action.payload;
    },
  },
});

export const { setErrorsBasicDetails, setCurrentPage, setInitialRender } =
  formSlice.actions;

export default formSlice.reducer;
