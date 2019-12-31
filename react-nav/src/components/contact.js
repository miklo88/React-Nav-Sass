import React from "react";
import { Link } from "react-router-dom";
import "./contact.scss";

const Contact = () => {
  return (
    <div className='contact-body'>
      <div className='contact-container'>
        <h1 className='contact-title'>contact</h1>
        <div className='form-container'>
          <p className=''>say hello to me.</p>
          <form className='contact-form'>
            <label className='label-1'>
              <input className='input-1' type='text' name='first-name' />
              <p className='first-name'>name</p>
            </label>
            <label className='label-2'>
              <input
                className='input-2'
                type='text'
                name='email'
                // value='email'
              />
              <p className='email'>email</p>
            </label>
            <label className='label-3'>
              <input className='input-3' type='text' name='text' />
              <p className='last-name'>additional info</p>
            </label>
            <label className='label-4'>
              <input
                className='input-4'
                type='submit'
                value='deliver message'
              />
              <p className=''></p>
            </label>
          </form>
          {/* contact-form */}
        </div>
        {/* homepage button */}
        <Link className='back-home' to='/home'>
          Home
        </Link>
        {/* contact-container */}
      </div>
      {/* contact-body */}
    </div>
  );
};

export { Contact };
