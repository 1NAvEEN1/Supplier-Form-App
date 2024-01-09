import axios from "axios";

const GetProvinces = async () => {
  const path = "/Location/GetProvinces";
  return axios.get(`${import.meta.env.VITE_BASE_URL}${path}`).catch((error) => {
    console.log(error);
  });
};

const GetDistricts = async (id) => {
  const path = `/Location/GetDistricts/${id}`;
  return axios.get(`${import.meta.env.VITE_BASE_URL}${path}`).catch((error) => {
    console.log(error);
  });
};

const GetCities = async (id) => {
  const path = `/Location/GetCities/${id}`;
  return axios.get(`${import.meta.env.VITE_BASE_URL}${path}`).catch((error) => {
    console.log(error);
  });
};

export { GetProvinces, GetDistricts, GetCities };
