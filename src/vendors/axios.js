import axios from "axios";

// set base URL
axios.defaults.baseURL = import.meta.env.VITE_API_APIEndPoint;

// setting headers
axios.interceptors.request.use(
  (config) => {
    config.headers = {
      "Content-Type": "application/json",
    };

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// handle response success and erros
axios.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response) {
      console.error("Response error:", error.response.data);
      console.error("Status code:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axios;
