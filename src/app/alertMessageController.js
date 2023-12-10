import { showMessage } from "../reducers/alertMessageSlice";
import store from "./store";

export const showAlertMessage = ({ message, type }) => {
  store.dispatch(
    showMessage({
      isVisible: true,
      message: message,
      type: type,
    })
  );
};
