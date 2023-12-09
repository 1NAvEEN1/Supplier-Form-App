import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    FormData: {
      language: "en",
    },
  },
  reducers: {
    setFormData: (state, action) => {
      state.FormData = action.payload;
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;
