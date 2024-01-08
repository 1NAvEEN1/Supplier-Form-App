import axios from "axios";

const GetProvinces = async () => {
  const path = "/Location/GetProvinces";
  return axios.get(`${import.meta.env.VITE_BASE_URL}${path}`).catch((error) => {
    console.log(error);
  });
};

export { GetProvinces };
