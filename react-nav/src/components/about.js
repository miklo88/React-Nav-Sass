import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='About'>
      <p>About me page</p>
      {/* homepage button */}
      <button>
        <Link to='/home'>Home</Link>
      </button>
    </div>
  );
};

export { About };
