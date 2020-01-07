import React from "react";
// styles
import "./contact.scss";

const Contact = () => {
  return (
    // page container
    <div className='contact-body'>
      {/* entire form container */}
      <div className='contact-container'>
        {/* container title */}
        <h1 className='contact-title'>Contact</h1>

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
          </form>
          {/* contact-form */}
          {/* submit link btn input */}
          <button
            className='input-btn'
            type='submit'
            onClick="alert('Hello
                World!')"
            value='submit'
          >
            Push me
          </button>
        </div>

        {/* contact-container */}
      </div>
      {/* contact-body */}
    </div>
  );
};

export { Contact };
