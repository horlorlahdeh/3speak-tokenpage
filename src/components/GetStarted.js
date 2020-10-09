import React from 'react';
import SpeakLogo from './assets/images/3S_logo.png';
// import GetStartedImg from './assets/images/getstarted.png';

import './assets/styles/GetStarted.css';

export default function GetStarted() {
  return (
    <div className='Get-Started-Wrapper'>
      <div className='background'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='logo text-center'>
              <img src={SpeakLogo} width={100} alt='speaklogo' />
            </div>
            <div className='get-started-title text-center'>
              <h2>Get Started</h2>
              <br />
              <br />
              {/* <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                necessitatibus ad esse molestiae!
              </p> */}
              <a href='#!' className='start-now'>
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
