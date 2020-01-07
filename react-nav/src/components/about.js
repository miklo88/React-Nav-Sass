import React from "react";
// import { Link } from "react-router-dom";

import { BackHome } from "../utils/backHome";

import "./about.scss";

// footer
const About = () => {
  return (
    <div className='about-body'>
      <h1 className='about-title'>About</h1>
      <div className='about-container'>
        <p>the story about a man who is obsessed with making an impact.</p>
        {/* about-container */}
      </div>
      {/* about-body */}

      {/* homepage button */}
      <BackHome />
    </div>
  );
};

export { About };
