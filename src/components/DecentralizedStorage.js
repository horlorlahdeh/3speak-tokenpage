import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';

class DecentralizedStorage extends Component {
  render() {
    return (
      <div className='WebVersion-Wrapper Top-Div' style={{ marginTop: 90 }}>
        <div className='bg-div'></div>
        <div className='bg-div2'></div>
        <ReactWOW animation='slideInLeft'>
          <section className='WebVersion'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>DECENTRALIZED STORAGE NODES</h2>
                    <p className='Slide-Title-Desc text-center'>
                      With 3Speak videos are stored in such a manner that
                      protects content creators such as Vloggers from bad actors
                      and censorship.
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
              <div className='col-md-4'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    <ReactWOW animation='jello'>
                      <img
                        className='account-img'
                        src='https://img.icons8.com/bubbles/100/000000/man-in-red-shirt-messaging.png'
                        alt='free-speech'
                      />
                    </ReactWOW>
                  </div>
                  <div className='own-card-title'>
                    <h4>Free Speech</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>
                      We have guaranteed free speech for our content creators,
                      since it will be impossible to remove videos from the
                      network that the community itself is storing
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    <ReactWOW animation='pulse'>
                      <img
                        className='community-img'
                        src='https://img.icons8.com/bubbles/100/000000/fraud.png'
                        alt='Censor'
                      />
                    </ReactWOW>
                  </div>
                  <div className='own-card-title'>
                    <h4>Censorship Resistant</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>
                      A separate desktop app that stores the videos every time a
                      user clicks play so that the videos are backed up far and
                      wide making them harder to censor
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    <ReactWOW animation='jello'>
                      <img
                        className='assets-img'
                        width='100'
                        src='https://img.icons8.com/bubbles/100/000000/bullish.png'
                        alt='Scale'
                      />
                    </ReactWOW>
                  </div>
                  <div className='own-card-title'>
                    <h4>Scalable Backend</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>
                      Our Communities are build in such a manner that any
                      external video platform can plug in to contribute to the
                      network and earn tokens.{' '}
                    </p>
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

export default DecentralizedStorage;
