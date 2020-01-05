import React from "react";
import axios from "axios";
// scss styling
import "./styles/styles.scss";
import "./styles/variables.scss";
// import "./styles/mixins.scss";

// importing components
import Routes from "./utils/routing";
// import Footer from "./utils/footer";
function a() {
  console.log("result of a()");
}
function b() {
  console.log("result of b()");
}
function c() {
  console.log("result of c()");
}
console.log("a() is done!");
console.log("b() is done!");
console.log("c() is done!");

function App() {
  return (
    <div className='App'>
      <Routes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
