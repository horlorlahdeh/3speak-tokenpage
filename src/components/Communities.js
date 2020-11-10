import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import ReactWOW from 'react-wow';
// import Airdrop from './assets/images/parachute.png';
import './assets/styles/Communities.css';

export class Communities extends Component {
  render() {
    return (
      <div className='Slide-Three-Wrapper Top-Div'>
        <ReactWOW animation='slideInLeft'>
          <div className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>OUR COMMUNITIES</h2>
                    <p className='Slide-Title-Desc text-center'>
                      Communities are immutable! Communities are owned by the
                      creator and cannot be deleted by anyone but the creator.
                      Lists of community members are stored on the blockchain
                      and so cannot be deleted by a central entity as with
                      legacy big tech platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='tokenomics-info'>
            <div className='container'>
              <div className='row token-utitlity-row'>
                <div className='col-md-3'>
                  <div className='card mobile-margin-auto text-center center'>
                    <section className='m-auto'>
                      <img
                        className='avatar'
                        src='https://images.hive.blog/u/hive-148441/avatar?size=icon'
                        alt='Airdrop'
                      />
                      {/* <span className='status online'></span> */}
                      <h3 className='community-name'>GEM</h3>
                      <span className='community-role'>200+ members</span>
                    </section>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card mobile-margin-auto'>
                    <section className='m-auto'>
                      <img
                        className='avatar'
                        src='https://images.hive.blog/u/hive-167922/avatar?size=icon'
                        alt='Airdrop'
                      />
                      {/* <span className='status online'></span> */}
                      <h3 className='community-name'>LeoFinance</h3>
                      <span className='community-role'>200+ members</span>
                    </section>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card mobile-margin-auto'>
                    <section className='m-auto'>
                      <img
                        className='avatar'
                        src='https://images.hive.blog/u/hive-140217/avatar?size=icon'
                        alt='Airdrop'
                      />
                      {/* <span className='status online'></span> */}
                      <h3 className='community-name'>Hive Gaming</h3>
                      <span className='community-role'>200+ members</span>
                    </section>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card mobile-margin-auto'>
                    <section className='m-auto'>
                      <img
                        className='avatar'
                        src='https://images.hive.blog/u/hive-156509/avatar?size=icon'
                        alt='Airdrop'
                      />
                      {/* <span className='status online'></span> */}
                      <h3 className='community-name'>OnChainArt</h3>
                      <span className='community-role'>200+ members</span>
                    </section>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card mobile-margin-auto'>
                    <section className='m-auto'>
                      <img
                        className='avatar'
                        src='https://images.hive.blog/u/hive-105017/avatar?size=icon'
                        alt='Airdrop'
                      />
                      {/* <span className='status online'></span> */}
                      <h3 className='community-name'>Hive CN</h3>
                      <span className='community-role'>200+ members</span>
                    </section>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card mobile-margin-auto'>
                    <section className='m-auto'>
                      <img
                        className='avatar'
                        src='https://images.hive.blog/u/hive-114105/avatar?size=icon'
                        alt='Airdrop'
                      />
                      {/* <span className='status online'></span> */}
                      <h3 className='community-name'>PowerHouseCreatives</h3>
                      <span className='community-role'>200+ members</span>
                    </section>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card mobile-margin-auto'>
                    <section className='m-auto'>
                      <img
                        className='avatar'
                        src='https://images.hive.blog/u/hive-181335/avatar?size=icon'
                        alt='Airdrop'
                      />
                      {/* <span className='status online'></span> */}
                      <h3 className='community-name'>Threespeak</h3>
                      <span className='community-role'>200+ members</span>
                    </section>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card mobile-margin-auto'>
                    <section className='m-auto'>
                      <img
                        className='avatar'
                        src='https://images.hive.blog/u/hive-122315/avatar?size=icon'
                        alt='Airdrop'
                      />
                      {/* <span className='status online'></span> */}
                      <h3 className='community-name'>Deep Dives</h3>
                      <span className='community-role'>200+ members</span>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReactWOW>
      </div>
    );
  }
}

export default Communities;
