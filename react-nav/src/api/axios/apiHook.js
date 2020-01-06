import React, { useState, useEffect } from "react";
import axios from "axios";

export default function APIHook() {
  //dummy api-   https://jsonplaceholder.typicode.com/users

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
    <div>
      <ul>apiHook data.</ul>
    </div>
  );
}
