import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../reducers/formSlice";
import loaderReducer from "../reducers/loaderSlice";
import errorMessages from "../reducers/errorMessages";
import alertMessageSlice from "../reducers/alertMessageSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    loader: loaderReducer,
    errors: errorMessages,
    alertMessage: alertMessageSlice,
  },
});

export default store;
