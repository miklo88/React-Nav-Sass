import React from "react";
import { Link } from "react-router-dom";
import "./contact.scss";

const Contact = () => {
  return (
    // page container
    <div className='contact-body'>
      {/* entire form container */}
      <div className='contact-container'>
        {/* container title */}
        <h1 className='contact-title'>contact</h1>
        <p className='form-title'>say hello to me</p>
        {/* form-container */}
        <div className='form-container'>
          <form className='contact-form'>
            {/* name input */}
            <label className='label-1'>
              <p className='first-name'>name</p>
              <input className='input-1' type='text' name='first-name' />
            </label>
            {/* email input */}
            <label className='label-2'>
              <p className='email'>email</p>
              <input
                className='input-2'
                type='text'
                name='email'
                // value='email'
              />
            </label>
            {/* info input */}
            <label className='label-3'>
              <p className='last-name'>additional info</p>
              <input className='input-3' type='text' name='text' />
            </label>
            {/* submit link btn input */}
            <label className='submit'>
              <input
                className='input-btn'
                type='button'
                onclick="alert('Hello World!')"
                value='submit'
              />
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
