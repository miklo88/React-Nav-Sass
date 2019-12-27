import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// importing pages or components the routes link to.
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Home } from "../components/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/home'>Landing Page</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
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
