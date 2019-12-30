import React from "react";
import { Link } from "react-router-dom";

// footer
const About = () => {
  return (
    <div className='about-body'>
      <h1 className='about-title'>about</h1>
      <div className='about-container'>
        the story about a man who is obsessed with making an impact.
      </div>
      {/* contact-body */}

      {/* homepage button */}
      <Link className='back-home' to='/home'>
        Home
      </Link>
    </div>
  );
};

export { About };
