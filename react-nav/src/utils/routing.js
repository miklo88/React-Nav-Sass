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
        <button className='nav-button'>
          <Link to='/home'>Landing Page</Link>
        </button>
        <button className='nav-button'>
          <Link to='/about'>About</Link>
        </button>
        <button className='nav-button'>
          <Link to='/contact'>Contact</Link>
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
