import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import TokenSystem from './assets/images/token_system.png';
import './assets/styles/TokenStaking.css';

export class TokenStaking extends Component {
  render() {
    return (
      <div className='Top-Div' style={{ marginTop: 5 }}>
        <ReactWOW animation='slideInLeft'>
          <section className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>TOKEN STAKING</h2>
                    <p className='Slide-Title-Desc text-center'>
                      Staking tokens enables you to receive: Platform
                      influence, longer staking period = higher rewards, receive
                      beneficiaries from all other network platforms,
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                
                  <div className='col-md-7'>
                    <img
                      src={TokenSystem}
                      alt='Token System'
                      style={{ width: '100%' }}
                    />
                  </div>
               
                <div className='col-md-5'>
                  <div className='Sub-Slide-Header' style={{marginTop: '0'}}>
                    <h3 className='Token-Staking'>
                      The following users will need to stake tokens in order to
                      take part in the network:{' '}
                    </h3>
                    <div className='row'>
                      <div className='col-12'>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-1'>
                            <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                          </div>
                          <div className='col-10'>Full Node Validators</div>
                        </div>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-1'>
                            <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                          </div>
                          <div className='col-10'>
                            Independent Creator Sites / Communities
                          </div>
                        </div>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-1'>
                            <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                          </div>
                          <div className='col-10'>
                            IVP’s (Independent Video Platforms)
                          </div>
                        </div>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-1'>
                            <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                          </div>
                          <div className='col-10'>Token Creators</div>
                        </div>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-1'>
                            <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                          </div>
                          <div className='col-10'>NFT Meme Mining</div>
                        </div>
                        <div className='row'>
                          <div className='col-1'>
                            <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                          </div>
                          <div className='col-10'>DeFi Specualtors</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ReactWOW>
      </div>
    );
  }
}

export default TokenStaking;
