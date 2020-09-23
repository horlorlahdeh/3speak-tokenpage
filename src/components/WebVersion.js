import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';

import './assets/styles/WebVersion.css';

export class WebVersion extends Component {
  render() {
    return (
      <div className='WebVersion-Wrapper'>
        <div className='bg-div'></div>
        <div className='bg-div2'></div>
        <ReactWOW animation='slideInLeft'>
          <section className='WebVersion'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>WELCOME TO 3SPEAK</h2>
                    <p className='Slide-Title-Desc text-center'>
                      3Speak provides the ability to any video platform or content
                      creator to store video content in a decentralised back up
                      IPFS / Torrent network while rewarding value providers
                      with the SPEAK token.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ReactWOW>
        <div className='container'>
          <ReactWOW animation='slideInUp'>
            <div className='row entire-row' data-wow-offset='100000'>
              <div className='col-md-3'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    <ReactWOW animation='jello'>
                      <img
                        className='account-img'
                        src='https://img.icons8.com/bubbles/100/000000/private-account-male.png'
                        alt='Account Icon'
                      />
                    </ReactWOW>
                  </div>
                  <div className='own-card-title'>
                    <h4>Own your account</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>Own your Account without any fear of censorship</p>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    <ReactWOW animation='pulse'>
                      <img
                        className='community-img'
                        src='https://img.icons8.com/bubbles/100/000000/groups.png'
                        alt='Community Icon'
                      />
                    </ReactWOW>
                  </div>
                  <div className='own-card-title'>
                    <h4>Own your Storage</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>Own your own decentralized without any form of central control</p>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    <ReactWOW animation='jello'>
                      <img
                        className='assets-img'
                        width='100'
                        src='https://img.icons8.com/bubbles/100/000000/bank.png'
                        alt='Digital Assets'
                      />
                    </ReactWOW>
                  </div>
                  <div className='own-card-title'>
                    <h4>Own your Token</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>Own independent communitiees powered by your custom tokens</p>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    <ReactWOW animation='jello'>
                      <img
                        className='assets-img'
                        width='100'
                        src='https://img.icons8.com/bubbles/100/000000/bank.png'
                        alt='Digital Assets'
                      />
                    </ReactWOW>
                  </div>
                  <div className='own-card-title'>
                    <h4>Own your Community</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>Own independent communitiees powered by a flexibile code-base</p>
                  </div>
                </div>
              </div>
            </div>
          </ReactWOW>
        </div>
      </div>
    );
  }
}

export default WebVersion;
