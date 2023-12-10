import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    currentPage: 1,
    initialRender: 0,
    formData: {
      language: "en",
      basicDetails: {
        province: 0,
        district: 0,
        city: 0,
        name: "",
        contactNo: "",
        email: "",
      },
    },
  },
  reducers: {
    setFormData: (state, action) => {
      const { province, district, city, name, phone, email } = action.payload;
      state.formData.basicDetails = {
        ...state.formData.basicDetails,
        province: province !== undefined ? province : state.formData.basicDetails.province,
        district: district !== undefined ? district : state.formData.basicDetails.district,
        city: city !== undefined ? city : state.formData.basicDetails.city,
        name: name !== undefined ? name : state.formData.basicDetails.name,
        contactNo: phone !== undefined ? phone : state.formData.basicDetails.contactNo,
        email: email !== undefined ? email : state.formData.basicDetails.email,
      };
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setInitialRender:(state,action)=> {
      state.initialRender = action.payload;
    }
  },
});


export const { setFormData, setCurrentPage,setInitialRender } = formSlice.actions;

export default formSlice.reducer;
