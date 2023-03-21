import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_CART}`,
  timeout: 2000,
});

export default class API_CART {
  static async getAllCart() {
    return await instance.get("");
  }
}