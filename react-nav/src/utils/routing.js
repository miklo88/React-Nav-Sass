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
        <h1>ReactJS</h1>
        <button className='nav-button'>
          <Link to='/home'>
            <p className='btn-text'>Landing Page</p>
          </Link>
        </button>
        <button className='nav-button'>
          <Link className='link' to='/about'>
            <p className='btn-text'>About</p>
          </Link>
        </button>
        <button className='nav-button'>
          <Link to='/contact'>
            <p className='btn-text'>Contact</p>
          </Link>
        </button>
      </div>

      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
