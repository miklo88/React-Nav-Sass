import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className='Contact'>
      <p>Contact me page/form</p>
      {/* homepage button */}
      <button>
        <Link to='/home'>Home</Link>
      </button>
    </div>
  );
};

export { Contact };
