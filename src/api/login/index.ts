import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_LOGIN}`,
  timeout: 2000,
});

export default class API_LOGIN {
  static async postLogin() {
    return await instance.post("");
  }
}