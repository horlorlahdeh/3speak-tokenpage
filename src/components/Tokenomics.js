import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import ReactWOW from 'react-wow';

import './assets/styles/SlideThree.css';

export class Tokenomics extends Component {
  render() {
    return (
      <ReactWOW animation='slideInLeft'>
        <div className='Slide-Three-Wrapper Top-Div'>
          <div className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>TOKENOMICS OF MEDIA CHAINS</h2>
                    <p className='Slide-Title-Desc text-center'>
                      The following is how we create demand and utility for our
                      token. It can be used for:
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='tokenomics-info'>
            <div className='container'>
              <div className='row token-utitlity-row'>
                <div className='col-md-4 tokenomics-card-wait'>
                  <div className='tokenomics-card text-center'>
                    <img
                      className='tokenomics-img'
                      src='https://img.icons8.com/color/96/000000/wallet.png'
                      alt='Money'
                    />
                    <h6 className='tokenomics-header'>
                      STAKE BASED VOTING RIGHTS
                    </h6>
                    <p className='tokenomics-desc text-center'>
                      The more of the token your hold / earn, the more your
                      voice counts in resolving decisions taken on the platform
                    </p>
                  </div>
                </div>

                <div className='col-md-4 tokenomics-card-wait'>
                  <div className='tokenomics-card text-center'>
                    <img
                      className='tokenomics-img'
                      src='https://img.icons8.com/color/96/000000/gift.png'
                      alt='Tipping'
                    />
                    <h6 className='tokenomics-header'>IMMUTABLE TIPPING</h6>
                    <p className='tokenomics-desc text-center'>
                      You can tip any piece of content on the network or tip a
                      creator directly with un-censorable currency outside of
                      the system. Therefore creators cannot be demonetised as
                      they can be on legacy platforms
                    </p>
                  </div>
                </div>

                <div className='col-md-4 tokenomics-card-wait'>
                  <div className='tokenomics-card text-center'>
                    <img
                      className='tokenomics-img'
                      src='https://img.icons8.com/color/96/000000/key-exchange.png'
                      alt='Money'
                    />
                    <h6 className='tokenomics-header'>DELEGATE TOKENS</h6>
                    <p className='tokenomics-desc text-center'>
                      You can delegate your ability to curate content to another
                      user on your behalf without risking your own tokens
                    </p>
                  </div>
                </div>
              </div>
              <div className='row token-utitlity-row'>
                <div className='col-md-4 tokenomics-card-wait'>
                  <div className='tokenomics-card text-center'>
                    <img
                      className='tokenomics-img'
                      src='https://img.icons8.com/color/96/000000/player-change.png'
                      alt='Money'
                    />
                    <h6 className='tokenomics-header'>
                      AUTONOMOUS REFERRAL SYSTEM
                    </h6>
                    <p className='tokenomics-desc text-center'>
                      Be rewarded for bringing new users, creators and your
                      community to the network
                    </p>
                  </div>
                </div>

                <div className='col-md-4 tokenomics-card-wait'>
                  <div className='tokenomics-card text-center'>
                    <img
                      className='tokenomics-img'
                      src='https://img.icons8.com/color/96/000000/matches.png'
                      alt='Burn Token'
                    />

                    <h6 className='tokenomics-header'>SPEND/BURN TOKENS</h6>
                    <p className='tokenomics-desc text-center'>
                      Burn tokens on the network to get your content to feature
                      more highly in communities, comment sections or in content
                      feeds
                    </p>
                  </div>
                </div>

                <div className='col-md-4 tokenomics-card-wait'>
                  <div className='tokenomics-card text-center'>
                    <img
                      className='tokenomics-img'
                      src='https://img.icons8.com/color/96/000000/card-security.png'
                      alt='Money'
                    />
                    <h6 className='tokenomics-header'>SUBSCRIPTIONS</h6>
                    <p className='tokenomics-desc text-center'>
                      Subscribe to your favourite creators for additional perks
                      and content (at the creator’s discretion of course)
                    </p>
                  </div>
                </div>
              </div>
              <div className='row token-utility-row'>
                <div className='col-md-2 hide-sm'></div>

                <div className='col-md-4 tokenomics-card-wait'>
                  <div className='tokenomics-card text-center'>
                    <img
                      className='tokenomics-img'
                      src='https://img.icons8.com/color/96/000000/commercial.png'
                      alt='Money'
                    />

                    <h6 className='tokenomics-header'>MARKETING</h6>
                    <p className='tokenomics-desc text-center'>
                      Use our marketing system to approach a community and
                      market your product / advertisement to them using our
                      tokens
                    </p>
                  </div>
                </div>

                <div className='col-md-4 tokenomics-card-wait'>
                  <div className='tokenomics-card text-center'>
                    <img
                      className='tokenomics-img'
                      src='https://img.icons8.com/color/96/000000/communication.png'
                      alt='Money'
                    />

                    <h6 className='tokenomics-header'>SUPER CHATS</h6>
                    <p className='tokenomics-desc text-center'>
                      Enjoy Super Chat made availalbe on live streams. An avenue
                      for your audience to engage with one another in real-time.
                    </p>
                  </div>
                </div>

                <div className='col-md-2 hide-sm'></div>
              </div>
            </div>
          </div>
        </div>
      </ReactWOW>
    );
  }
}

export default Tokenomics;
