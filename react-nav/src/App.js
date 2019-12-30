import React from "react";

// scss styling
import "./styles/styles.scss";
import "./styles/variables.scss";
// import "./styles/mixins.scss";

// importing components
import Routes from "./utils/routing";
import Footer from "./utils/footer";

function App() {
  return (
    <div className='App'>
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
