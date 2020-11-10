import axios from "axios";

const instance = axios.create({
  baseURL: " https://tinder-backend-shiv0403.herokuapp.com",
});

export default instance;
