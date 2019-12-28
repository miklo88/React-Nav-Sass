import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className='Contact'>
      <p>Contact me page/form</p>

      {/* homepage button */}
      <button className='back-btn'>
        <Link to='/home'>Home</Link>
      </button>
    </div>
  );
};

export { Contact };
