import axios from "axios";

const customHeader = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, Authorization, Content-Length, X-Requested-With",
  "Access-Control-Allow-Credentials": "true",
  Authorization: "Bearer " + localStorage.getItem("token"),
};

export const axiosHelper = {
  get: async (url, params, header) => {
    customHeader["Authorization"] = "Bearer " + localStorage.getItem("token");
    return await axios({
      method: "get",
      url: process.env.REACT_APP_WFH_TIME_ATTENDANCE_API_URL + url,
      headers: {
        ...customHeader,
        ...header,
      },
      params: params,
      validateStatus: () => true,
    }).then((response) => {
      return response;
    });
  },
  post: async (url, data, header) => {
    customHeader["Authorization"] = "Bearer " + localStorage.getItem("token");
    return await axios({
      method: "post",
      url: process.env.REACT_APP_WFH_TIME_ATTENDANCE_API_URL + url,
      headers: {
        ...customHeader,
        ...header,
      },
      data: data,
      validateStatus: () => true,
    }).then((response) => {
      return response;
    });
  },
};
