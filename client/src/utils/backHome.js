import React from "react";
import { Link } from "react-router-dom";

// styles
import "./footer.scss";

// footer body
const BackHome = () => {
  return (
    <div>
      {/* homepage button */}
      <Link className='back-home' to='/'>
        Home
      </Link>
    </div>
  );
};

export { BackHome };
