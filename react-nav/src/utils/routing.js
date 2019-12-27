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
        <ul>
          <button>
            <li>
              <Link className='nav-link' to='/'>
                Landing Page
              </Link>
            </li>
          </button>
          <button>
            <li>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
          </button>
          <button>
            <li>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
          </button>
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
