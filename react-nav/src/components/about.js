import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='About'>
      <p>About me page</p>

      {/* homepage button */}
      <Link className='back-home' to='/home'>
        Home
      </Link>
    </div>
  );
};

export { About };
