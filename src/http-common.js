import axios from "axios";
export default axios.create({
  baseURL: "https://dev-playbox.erpn.us/api/",
  headers: {
    "Content-type": "application/json"
  }
});