import React from "react";
import { Link } from "react-router-dom";

import "./about.scss";

// footer
const About = () => {
  return (
    <div className='about-body'>
      <h1 className='about-title'>about</h1>
      <div className='about-container'>
        <p>the story about a man who is obsessed with making an impact.</p>
        {/* about-container */}
      </div>
      {/* about-body */}

      {/* homepage button */}
      <Link className='back-home' to='/home'>
        Home
      </Link>
    </div>
  );
};

export { About };
