import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    navigateToPage: 99,
    initialRender: 0,
    selectedProductIndex: 99,
    formData: {
      language: "en",
      basicDetails: {
        province: "0",
        district: "0",
        city: "0",
        name: "",
        contactNo: "",
        contactNo2: "",
        email: "",
      },
      productDetails: [],
      businessRegDetails: {
        registered: 0,
        businessType: "pvt",
        businessName: "",
      },
      certificatesDetails: {
        certificates: 0,
        certificatesNames: "",
      },
      exportingDetails: {
        exporting: 0,
        countries: "",
      },
      askForExporting: 1,
    },
  },
  reducers: {
    setFormData: (state, action) => {
      const { province, district, city, name, phone, phone2, email } =
        action.payload;
      state.formData.basicDetails = {
        ...state.formData.basicDetails,
        province:
          province !== undefined
            ? province
            : state.formData.basicDetails.province,
        district:
          district !== undefined
            ? district
            : state.formData.basicDetails.district,
        city: city !== undefined ? city : state.formData.basicDetails.city,
        name: name !== undefined ? name : state.formData.basicDetails.name,
        contactNo:
          phone !== undefined ? phone : state.formData.basicDetails.contactNo,
        contactNo2:
          phone2 !== undefined ? phone2 : state.formData.basicDetails.contactNo2,
        email: email !== undefined ? email : state.formData.basicDetails.email,
      };
    },
    setNavigateToPage: (state, action) => {
      state.navigateToPage = action.payload;
    },
    setProductDetails: (state, action) => {
      state.formData.productDetails = action.payload;
    },
    setSelectedProductIndex: (state, action) => {
      state.selectedProductIndex = action.payload;
    },

    setBusinessRegDetails: (state, action) => {
      const { registered, businessType, businessName } = action.payload;
      state.formData.businessRegDetails = {
        ...state.formData.businessRegDetails,
        registered:
          registered !== undefined
            ? registered
            : state.formData.businessRegDetails.registered,
        businessType:
          businessType !== undefined
            ? businessType
            : state.formData.businessRegDetails.businessType,
        businessName:
          businessName !== undefined
            ? businessName
            : state.formData.businessRegDetails.businessName,
      };
    },

    setCertificatesDetails: (state, action) => {
      const { certificates, certificatesNames } = action.payload;
      state.formData.certificatesDetails = {
        ...state.formData.certificatesDetails,
        certificates:
          certificates !== undefined
            ? certificates
            : state.formData.certificatesDetails.certificates,
        certificatesNames:
          certificatesNames !== undefined
            ? certificatesNames
            : state.formData.certificatesDetails.certificatesNames,
      };
    },
    setExportingDetails: (state, action) => {
      const { exporting, countries } = action.payload;
      state.formData.exportingDetails = {
        ...state.formData.exportingDetails,
        exporting:
          exporting !== undefined
            ? exporting
            : state.formData.exportingDetails.exporting,
        countries:
          countries !== undefined
            ? countries
            : state.formData.exportingDetails.countries,
      };
    },

    setAskForExporting: (state, action) => {
      state.formData.askForExporting = action.payload;
    },
  },
});

export const {
  setFormData,
  setProductDetails,
  setBusinessRegDetails,
  setCertificatesDetails,
  setExportingDetails,
  setAskForExporting,
  setSelectedProductIndex,
  setNavigateToPage,
} = formSlice.actions;

export default formSlice.reducer;
