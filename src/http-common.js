import axios from "axios";
export default axios.create({
  baseURL: "https://playbox.erpn.us/api",
  headers: {
    "Content-type": "application/json"
  }
});