import { createSlice } from "@reduxjs/toolkit";

const alertMessageSlice = createSlice({
  name: "successMessage",

  initialState: {
    isVisible: false,
    message: "",
    type: "",
  },

  reducers: {
    showMessage: (state, action) => {
      state.isVisible = action.payload.isVisible;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
  },
});

export const { showMessage } = alertMessageSlice.actions;

export default alertMessageSlice.reducer;
