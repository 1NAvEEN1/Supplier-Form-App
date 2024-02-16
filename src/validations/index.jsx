import { showAlertMessage } from "../app/alertMessageController";
import store from "../app/store";

const validation = (currentPageIndex, dispatch, setErrorsBasicDetails) => {
  let isValidate = 1;

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (currentPageIndex === 2) {
    const data = store.getState().form.formData.basicDetails;
    let error = "";

    const validatePhoneNumber = (phoneNumber, errorMessage) => {
      if (
        phoneNumber &&
        (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber))
      ) {
        error = errorMessage;
        showAlertMessage({
          message: errorMessage,
          type: "error",
        });
        isValidate = 0;
      }
    };

    console.log(data);

    if (
      data.province == 0 &&
      data.district == 0 &&
      data.city == 0 &&
      data.name == "" &&
      data.contactNo == ""
    ) {
      showAlertMessage({
        message: "Please fill the form",
        type: "error",
      });
      isValidate = 0;
    } else if (data.province == 0) {
      showAlertMessage({
        message: "select a province",
        type: "error",
      });
      error = "province";
      isValidate = 0;
    } else if (data.district == 0) {
      error = "district";
      showAlertMessage({
        message: "Please select a district",
        type: "error",
      });
      isValidate = 0;
    } else if (data.city == 0) {
      error = "city";
      showAlertMessage({
        message: "select a city",
        type: "error",
      });
      isValidate = 0;
    } else if (data.name == "") {
      error = "name";
      showAlertMessage({
        message: "Please fill the name",
        type: "error",
      });
      isValidate = 0;
    } else if (data.contactNo == "") {
      error = "number";
      showAlertMessage({
        message: "Please fill the contact number",
        type: "error",
      });
      isValidate = 0;
    } else {
      validatePhoneNumber(data.contactNo, "Invalid Contact Number");
      validatePhoneNumber(data.contactNo2, "Invalid WhatsApp Number");
    }

    if (data.email == "") {
    } else if (!validateEmail(data.email)) {
      error = "email";
      showAlertMessage({
        message: "Please enter a valid email address",
        type: "error",
      });
      isValidate = 0;
    }
    console.log(error);

    dispatch(setErrorsBasicDetails({ error }));

    // if (!isValidate) {
    //   showAlertMessage({
    //     message: "Please fill in the correct data",
    //     type: "error",
    //   });
    // }
  }

  if (currentPageIndex === 3) {
    let data = store.getState().form.formData.productDetails;

    if (data.length === 0) {
      isValidate = 0;
      showAlertMessage({
        message: "Add a product first",
        type: "error",
      });
    } else {
      isValidate = 1;
    }
  }

  if (currentPageIndex === 4) {
    let data = store.getState().form.formData.businessRegDetails;

    if (data.registered === 1) {
      if (data.businessType === "") {
        isValidate = 0;
        showAlertMessage({
          message: "Please enter the business type !",
          type: "error",
        });
      } else if (data.businessName == "") {
        isValidate = 0;
        showAlertMessage({
          message: "Please enter the business name !",
          type: "error",
        });
      }
    } else {
      isValidate = 1;
    }
  }

  if (currentPageIndex === 5) {
    let data = store.getState().form.formData.certificatesDetails;

    if (data.certificates === 1) {
      if (data.certificatesNames == "") {
        isValidate = 0;
        showAlertMessage({
          message: "Please enter the certificates names !",
          type: "error",
        });
      }
    } else {
      isValidate = 1;
    }
  }

  if (currentPageIndex === 6) {
    let data = store.getState().form.formData.exportingDetails;

    if (data.exporting === 1) {
      if (data.countries == "") {
        isValidate = 0;
        showAlertMessage({
          message: "Please enter countries !",
          type: "error",
        });
      }
    } else {
      isValidate = 1;
    }
  }

  return isValidate;
};

export default validation;
