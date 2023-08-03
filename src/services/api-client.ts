import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1ef5a4b136fa4e69bee09aff104eff05",
  },
});
