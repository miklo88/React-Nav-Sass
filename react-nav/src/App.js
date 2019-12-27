import React from "react";
import "./styles/styles.scss";

// importing components
import Routes from "./utils/routing";
import Nav from "./components/nav";

function App() {
  return (
    <div className='App'>
      <h1>ReactJS Home</h1>
      <Routes />
      <Nav />
    </div>
  );
}

export default App;
