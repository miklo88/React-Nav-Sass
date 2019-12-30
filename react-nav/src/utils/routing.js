import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// importing pages or components the routes link to.
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Home } from "../components/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className='nav-main'>
        {/* nav h1 title */}
        <h1 className='nav-h1'>MIKLO</h1>
        {/* navigation buttons and links and routes */}
        <div className='nav-btn-wrap'>
          <Link className='btn-link' to='/home'>
            home
          </Link>
          <Link className='btn-link' to='/about'>
            about
          </Link>
          <Link className='btn-link' to='/contact'>
            contact
          </Link>
        </div>
        {/* nav-btn-wrap */}
      </div>
      {/* nav-main */}

      {/* route paths */}
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
