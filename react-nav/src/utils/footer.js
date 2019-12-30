import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

// footer body
const Footer = () => {
  return (
    <BrowserRouter>
      <div className='footer-body'>
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
