import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-react.herokuapp.com/",
});

export default instance;
