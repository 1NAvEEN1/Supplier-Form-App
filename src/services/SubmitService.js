import axios from "axios";

const SubmitData = async (data) => {
  const path = "/Supplier";
  return axios
    .post(`${import.meta.env.VITE_BASE_URL}${path}`, data)
    .catch((error) => {
      console.log(error);
    });
};

export { SubmitData };
