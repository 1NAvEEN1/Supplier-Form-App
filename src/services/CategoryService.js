import axios from "axios";

const GetProductCategories = async () => {
  const path = "/Product/GetProductCategories";
  return axios.get(`${import.meta.env.VITE_BASE_URL}${path}`).catch((error) => {
    console.log(error);
  });
};

const GetProductSubCategories = async (id) => {
  const path = `/Product/GetProductSubCategories/${id}`;
  return axios.get(`${import.meta.env.VITE_BASE_URL}${path}`).catch((error) => {
    console.log(error);
  });
};

const GetAllCategories = async () => {
  const path = "/Product/GetAllCategories";
  return axios.get(`${import.meta.env.VITE_BASE_URL}${path}`).catch((error) => {
    console.log(error);
  });
};

export { GetProductCategories, GetProductSubCategories, GetAllCategories };
