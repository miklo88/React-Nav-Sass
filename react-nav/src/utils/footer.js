import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import { Home } from "../components/home";
// footer body
const Footer = () => {
  return (
    <BrowserRouter>
      <div>
        {/* homepage button */}
        {/* homepage button */}
        <Link className='back-home' to='/home'>
          Home
        </Link>
      </div>
    </BrowserRouter>
    // footer-body
  );
};

export default Footer;
