import { showAlertMessage } from "../app/alertMessageController";
import store from "../app/store";

const validation = (currentPageIndex, dispatch, setErrorsBasicDetails) => {
  let isValidate = 1;

  if (currentPageIndex === 2) {
    let data = store.getState().form.formData.basicDetails;
    let errors = {
      province: "",
      district: "",
      city: "",
      name: "",
      phone: "",
      email: "",
    };
    console.log(data);
    if (data.province === 0) {
      errors.province = "select a province";
      isValidate = 0;
    }

    if (data.district === 0) {
      errors.district = "select a district";
      isValidate = 0;
    }
    if (data.city === 0) {
      errors.city = "select a city";
      isValidate = 0;
    }

    if (data.name === "") {
      errors.name = "select a name";
      isValidate = 0;
    }

    if (data.phone === "") {
      errors.phone = "select a phone";
      isValidate = 0;
    }
    // if (data.email === "") {
    //   errors.email = "select a email";
    //   isValidate = 0;
    // }
    console.log(errors);

    dispatch(setErrorsBasicDetails({ errors }));

    if (!isValidate) {
      showAlertMessage({
        message: "Please fill the correct data",
        type: "error",
      });
    }
  }

  return isValidate;
};

export default validation;
