import React from "react";
// import { Link } from "react-router-dom";

// styles
import "./footer.scss";

// footer body
const Footer = () => {
  return (
    <div className='footer-container'>
      <p className='text-right'>miklo</p>
      <p className='text-left'>
        chicago.<br></br>visual design.<br></br>code.
      </p>
      {/* homepage button */}
      {/* <Link className='btn-link' to='/'>
        Footer
      </Link> */}
    </div>
  );
};

export default Footer;
