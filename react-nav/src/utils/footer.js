import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// footer body
const Footer = () => {
  return (
    <BrowserRouter>
      <div className='footer-body'>
        {/* homepage button */}
        <Link className='back-home' to='/home'>
          Home
        </Link>
        {/* <Switch>
          <Route path='/home' component={Home} />
        </Switch> */}
      </div>
    </BrowserRouter>
    // footer-body
  );
};

export default Footer;
