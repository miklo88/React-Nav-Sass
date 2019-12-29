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
        <h1 className='nav-h1'>ReactJS</h1>
        {/* navigation buttons and links and routes */}
        <div className='nav-btn-wrap'>
          <button className='nav-button'>
            <Link className='btn-link' to='/home'>
              <p>Landing Page</p>
            </Link>
          </button>
          <button className='nav-button'>
            <Link className='btn-link' to='/about'>
              <p className='btn-text'>About</p>
            </Link>
          </button>
          <button className='nav-button'>
            <Link className='btn-link' to='/contact'>
              <p className='btn-text'>Contact</p>
            </Link>
          </button>
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
