import React from "react";
import axios from "axios";

const API = () => {
  // logic
  axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/photos/`
  });

  // page rendered data
  return <>axios data.</>;
};

export default API;
