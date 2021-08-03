import axios from "axios";

const BaseApi = axios.create({
  baseURL: "https://dog.ceo/api/breeds",
});

export default BaseApi;
