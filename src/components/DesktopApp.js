import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import DesktopAppImage from './assets/images/desktop_app.png';
import './assets/styles/Influencers.css';

export class DesktopApp extends Component {
  render() {
    return (
      <div className='Top-Div' style={{ marginTop: 90 }}>
        
          <section className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>DESKTOP APP</h2>
                    <p className='Slide-Title-Desc text-center'>
                      The desktop app ties directly into the 3Speak back up file storage network and provides maximum censorship resistance for our users.
                      If the 3Speak desktop platform is compromised, everything will survive on the 3Speak desktop app and back up network.

                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <ReactWOW animation='flipInX'>
                  <div className='col-md-10 offset-1'>
                    <img
                      src={DesktopAppImage}
                      alt='Desktop App'
                      style={{ width: '100%' }}
                    />
                  </div>
                </ReactWOW>
                </div>
            </div>
          </section>
       
      </div>
    );
  }
}

export default DesktopApp;
