import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://localhost:5000/api/";

const ResponseBody = (res: AxiosResponse) => res.data;

const requests = {
  get: (url: string) => axios.get(url).then(ResponseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(ResponseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(ResponseBody),
  delete: (url: string) => axios.delete(url).then(ResponseBody),
};

const catalog = {
  list: () => requests.get("Products"),
  details: (id: number) => requests.get(`Products/${id}`),
};

const TestErrors = {
  get400Error: () => requests.get("Bug/bad-request"),
  get401Error: () => requests.get("Bug/unauthorized"),
  get404Error: () => requests.get("Bug/not-found"),
  get500Error: () => requests.get("Bug/server-error"),
  getValidationError: () => requests.get("Bug/validation-error"),
};

const agent = {
  catalog,
  TestErrors,
};

export default agent;
