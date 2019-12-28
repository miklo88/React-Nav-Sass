import React from "react";

// scss styling
import "./styles/styles.scss";
import "./styles/variables.scss";

// importing components
import Routes from "./utils/routing";

function App() {
  return (
    <div className='App'>
      <h1>ReactJS</h1>
      <Routes />
    </div>
  );
}

export default App;
