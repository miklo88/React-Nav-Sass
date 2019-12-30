import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className='contact-body'>
      <h1 className='contact-title'>contact</h1>
      say hello to me.
      <div className='form-container'>
        <form className='contact-form'>
          <label className='label-1'>
            <input className='input-1' type='text' name='first' />
          </label>
          <label className='label-1'>
            <input className='input-2' type='text' name='last' />
          </label>
          <label className='label-1'>
            <input className='input-3' type='submit' value='email' />
          </label>
        </form>
        {/* contact-form */}
      </div>
      {/* homepage button */}
      <Link className='back-home' to='/home'>
        Home
      </Link>
      {/* contact-body */}
    </div>
  );
};

export { Contact };
