import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className='Contact'>
      <p>Contact me page/form</p>

      {/* homepage button */}
      <button className='back-btn'>
        <Link className='link' to='/home'>
          <p className='btn-home-text'>Home</p>
        </Link>
      </button>
    </div>
  );
};

export { Contact };
