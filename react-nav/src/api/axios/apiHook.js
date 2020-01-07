// import React, { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

export default function APIHook() {
  //dummy api-   https://jsonplaceholder.typicode.com/users
  //   return await axios.get("https://dog.ceo/api/breeds/list/all");

  const getTanks = async () => {
    try {
      return await axios.get("https://api.worldoftanks.com/wot/account/tanks/");
    } catch (error) {
      console.error(error);
    }
  };
  const countTanks = async () => {
    const tanks = await getTanks();
    if (tanks.data.message) {
      console.log(`Got ${Object.entries(tanks.data.message).length} tanks`);
    }
  };
  countTanks();

  return (
    <div>
      <ul>apiHook data.</ul>
    </div>
  );
}
