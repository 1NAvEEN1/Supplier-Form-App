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
      phone2: "",
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

    if (data.contactNo === "") {
      errors.contactNo = "Enter a phone number";
      isValidate = 0;
    } else if (data.contactNo.length !== 10 || !/^\d+$/.test(data.contactNo)) {
      errors.phone = "Phone number should be a 10-digit number";
      isValidate = 0;
    }

    if (data.contactNo2 === "") {
    } else if (
      data.contactNo2.length !== 10 ||
      !/^\d+$/.test(data.contactNo2)
    ) {
      errors.phone = "Phone number should be a 10-digit number";
      showAlertMessage({
        message: "Invalid Secondary Mobile Number",
        type: "error",
      });
      isValidate = 0;
    }

    console.log(errors);

    dispatch(setErrorsBasicDetails({ errors }));

    if (!isValidate) {
      showAlertMessage({
        message: "Please fill the correct data",
        type: "error",
      });
    }
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
      if (data.businessName == "") {
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
