import React from "react";
import axios from "axios";

import "./api.scss";

const API = () => {
  // logic
  axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/photos/`
  });
  return (
    <div className='API-container'>
      <h1 className='API-H1'>axios data</h1>
    </div>
  );
};

export default API;
