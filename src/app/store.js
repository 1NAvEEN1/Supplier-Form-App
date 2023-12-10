import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../reducers/formSlice";
import loaderReducer from "../reducers/loaderSlice";
import alertMessageSlice from "../reducers/alertMessageSlice";
import errorMessages from "../reducers/errorMessages";

const store = configureStore({
  reducer: {
    form: formReducer,
    loader: loaderReducer,
    alertMessage: alertMessageSlice,
    errors: errorMessages,
  },
});

export default store;
