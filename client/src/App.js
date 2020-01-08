import React from "react";
// scss styling
import "./styles/styles.scss";
import "./styles/variables.scss";
// import "./styles/mixins.scss";

// importing components
import API from "./api/axios/axios";
import Routes from "./utils/routing";
import APIHook from "./api/axios/apiHook";
import Footer from "./utils/footer";

function App() {
  return (
    <div className='App'>
      {/* components */}
      <Routes />
      <APIHook />
      <API />

      <Footer />
    </div>
  );
}

export default App;
