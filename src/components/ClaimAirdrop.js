import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import ReactWOW from 'react-wow';
import Airdrop from './assets/images/parachute.png';
import './assets/styles/ClaimAirdrop.css';

export class ClaimAirdrop extends Component {
  render() {
    return (
      <div className='Slide-Three-Wrapper Top-Div'>
        <ReactWOW animation='slideInLeft'>
          <div className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>CLAIM AIRDROP</h2>
                    <p className='Slide-Title-Desc text-center'>
                      The following is how we create demand and utility for our
                      token. It can be used for:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReactWOW>
        <div className='tokenomics-info'>
          <div className='container'>
            <div className='row token-utitlity-row'>
              <ReactWOW animation='flipInX'>
                <button className='card'>
                  <section>
                    <img className='avatar' src={Airdrop} alt='Airdrop' />
                    <span className='status online'></span>
                    <h3 className='user-name'>John Doe</h3>
                    <span className='user-role'>Student</span>
                  </section>
                </button>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClaimAirdrop;
