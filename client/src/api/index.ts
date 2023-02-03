import ApiConstants from "./constants";
import axios from "axios";

export default async function api(path:string, method:string, params:object | null) {
  let options;
  let token = localStorage.getItem('token');
  options = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/x-www-form-urlencoded',
      "Authorization": token,
    },
    method: method,
    url: ApiConstants.BASE_URL + path,
    ...(params && { data: params }),
  };

  return axios(options)
    .then((response) => {
      return Promise.resolve(response.data)
    })
    .catch((error) => {
      if (error?.response?.status === 401) {
        return localStorage.clear();
      }
      return Promise.reject(error?.response?.data);
    });
}