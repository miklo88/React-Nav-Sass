import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className='Contact'>
      <p>Contact me page/form</p>
      <div>
        <form>
          <inputs />
          <inputs />
          <inputs />
        </form>
      </div>
      {/* homepage button */}
      <Link className='back-home' to='/home'>
        Home
      </Link>
    </div>
  );
};

export { Contact };
