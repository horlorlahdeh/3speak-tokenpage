import React, { Component } from 'react';
import './assets/styles/SlideFour.css';
import './assets/styles/main.css';
import './assets/styles/util.css';
// import SpeakLogo from './assets/images/3S_logo.png';

class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className='contact1'>
        <div className="Slide-Header">
          <h2 className='Slide-Title'>Get in touch</h2>
        </div>
          <div className='container-contact1 justify-content-center'>
            {/* <div className='contact1-pic js-tilt' data-tilt>
              <img src={SpeakLogo} alt='icon' />
            </div> */}

            <form className='contact1-form validate-form'>
              

              <div
                className='wrap-input1 validate-input'
                data-validate='Name is required'
              >
                <input
                  className='input1'
                  type='text'
                  name='name'
                  placeholder='Name'
                />
                <span className='shadow-input1'></span>
              </div>

              <div
                className='wrap-input1 validate-input'
                data-validate='Valid email is required: ex@abc.xyz'
              >
                <input
                  className='input1'
                  type='text'
                  name='email'
                  placeholder='Email'
                />
                <span className='shadow-input1'></span>
              </div>

              <div
                className='wrap-input1 validate-input'
                data-validate='Subject is required'
              >
                <input
                  className='input1'
                  type='text'
                  name='subject'
                  placeholder='Subject'
                />
                <span className='shadow-input1'></span>
              </div>

              <div
                className='wrap-input1 validate-input'
                data-validate='Message is required'
              >
                <textarea
                  className='input1'
                  name='message'
                  placeholder='Message'
                ></textarea>
                <span className='shadow-input1'></span>
              </div>

              <div className='container-contact1-form-btn'>
                <button className='contact1-form-btn'>
                  <span>
                    Send Email
                    <i className='fa fa-long-arrow-right' aria-hidden='true'></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
