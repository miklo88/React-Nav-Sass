import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='About'>
      <p>About me page</p>

      {/* homepage button */}
      <button className='back-btn'>
        <Link className='link' to='/home'>
          <p className='btn-home-text'>Home</p>
        </Link>
      </button>
    </div>
  );
};

export { About };
