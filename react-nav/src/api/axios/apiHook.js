import React, { useState, useEffect } from "react";
import axios from "axios";

// const axios = require("axios");

export default function APIHook() {
  // initializing state
  //   const [users, setUsers] = useState([]);
  //   const [showDetails, setShowDetails] = useState(false);

  // // asyncpromise
  //     async componentDidMount() {
  //         const response = await axios
  //           .get(`https://jsonplaceholder.typicode.com/users`);

  //         this.setState({ users: response.data });
  //       };

  //       async componentDidUpdate(prevProps) {
  //         if (prevProps.resource !== this.props.resource) {
  //           const response = await axios
  //             .get(`https://jsonplaceholder.typicode.com/users`);

  //           this.setState({ users: response.data });
  //         }
  //       };

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
