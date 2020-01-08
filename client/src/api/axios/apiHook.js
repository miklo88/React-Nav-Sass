// import React, { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

// styles
import "./api.scss";

export default function APIHook() {
  //dummy api-   https://jsonplaceholder.typicode.com/users
  //   return await axios.get("https://dog.ceo/api/breeds/list/all");
  // return await axios.get("https://api.worldoftanks.com/wot/account/tanks/");

  const getBreeds = async () => {
    try {
      return await axios.get("https://dog.ceo/api/breeds/list/all");
    } catch (error) {
      console.error(error);
    }
  };
  const countBreeds = async () => {
    const breeds = await getBreeds();
    if (breeds.data.message) {
      console.log(`Got ${Object.entries(breeds.data.message).length} breeds`);
    }
  };
  countBreeds();

  return (
    <div className='apiHook'>
      <div className='apiHook-form-cont'>
        <h1 className='apiHook-H1'>ApiHook Data.</h1>

        <ul className='items-container'>
          <li className='item'>for the api data</li>
          <li className='item'>for the api data</li>
          <li className='item'>for the api data</li>
          <li className='item'>for the api data</li>
        </ul>
        {/* items-container */}
      </div>
      {/* apiHook-form-cont */}
    </div>
    // apiHook
  );
}
