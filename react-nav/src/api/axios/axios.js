import React from "react";
import axios from "axios";

import "./api.scss";

const API = () => {
  // logic
  axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/photos/`
  });
  return <>axios data.</>;
};

export default API;
