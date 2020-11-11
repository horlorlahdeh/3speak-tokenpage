import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';

import './assets/styles/WebVersion.css';

export class WebVersion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMoreSelfHosting: false,
      readMoreCreateToken: false,
      readMoreImmutable: false,
      readMoreMemeMining: false,
      selfHostingText:
        'Your community can take responsibility for backing up your videos with the networks self-hosting system.  This removes centralised control of censorship and content, putting the responsibility with you and your community',
      createTokenText:
        'Create and Fund your Own Token Economies to allow your community to operate outside of and independently from the "System"',
      immutableCommunities:
        'Members of your communities are backed up on the blockchain, so that we cannot delete them.Making them immutable and resistant to censorship',
      memeMining:
        'When users can mine rare, collectible NFT’s by HODLing and staking the tokens of their favourite creators. We will have a new value capture mechanism that will be as powerful as the stock market mechanism for value investors. 3speak is implementing this',
    };
  }
  render() {
    return (
      <div className='WebVersion-Wrapper'>
        <div className='bg-div'></div>
        <div className='bg-div2'></div>
        
          <section className='WebVersion'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>WELCOME TO 3SPEAK</h2>
                    <p className='Slide-Title-Desc text-center'>
                      3Speak provides the ability to any video platform or
                      content creator to store video content in a decentralised
                      back up IPFS / Torrent network while rewarding value
                      providers with the SPEAK token.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
        <div className='container'>
          <ReactWOW animation='slideInUp'>
            <div className='row entire-row' data-wow-offset='100000'>
              <div className='col-md-3'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    
                      <img
                        className='community-img'
                        src='https://img.icons8.com/bubbles/100/000000/groups.png'
                        alt='Community Icon'
                      />
                    
                  </div>
                  <div className='own-card-title'>
                    <h4>Self Hosting</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>
                      {!this.state.readMoreSelfHosting
                        ? this.state.selfHostingText.substring(0, 50) + ' ...'
                        : this.state.selfHostingText}
                    </p>
                    <button
                      onClick={() => {
                        this.setState({
                          readMoreSelfHosting: !this.state.readMoreSelfHosting,
                        });
                      }}
                    >
                      {this.state.readMoreSelfHosting
                        ? 'Read less'
                        : 'Read more'}
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    
                      <img
                        className='assets-img'
                        width='100'
                        src='https://img.icons8.com/bubbles/100/000000/bank.png'
                        alt='Digital Assets'
                      />
                    
                  </div>
                  <div className='own-card-title'>
                    <h4>Create Token Economies</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>
                      {!this.state.readMoreCreateToken
                        ? this.state.createTokenText.substring(0, 50) + ' ...'
                        : this.state.createTokenText}
                    </p>
                    <button
                      onClick={() => {
                        this.setState({
                          readMoreCreateToken: !this.state.readMoreCreateToken,
                        });
                      }}
                    >
                      {this.state.readMoreCreateToken
                        ? 'Read less'
                        : 'Read more'}
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    
                      <img
                        className='assets-img'
                        width='100'
                        src='https://img.icons8.com/bubbles/100/000000/fingerprint.png'
                        alt='Digital Assets'
                      />
                    
                  </div>
                  <div className='own-card-title'>
                    <h4>Immutable Communities</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>
                      {!this.state.readMoreImmutable
                        ? this.state.immutableCommunities.substring(0, 50) +
                          ' ...'
                        : this.state.immutableCommunities}
                    </p>
                    <button
                      onClick={() => {
                        this.setState({
                          readMoreImmutable: !this.state.readMoreImmutable,
                        });
                      }}
                    >
                      {this.state.readMoreImmutable ? 'Read less' : 'Read more'}
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='own-card text-center'>
                  <div className='own-card-icon'>
                    
                      <img
                        className='assets-img'
                        width='100'
                        src='https://img.icons8.com/bubbles/100/000000/combo-chart.png'
                        alt='Digital Assets'
                      />
                   
                  </div>
                  <div className='own-card-title'>
                    <h4>MEME Mining</h4>
                  </div>
                  <div className='own-card-body'>
                    <p>
                      {!this.state.readMoreMemeMining
                        ? this.state.memeMining.substring(0, 50) + ' ...'
                        : this.state.memeMining}
                    </p>
                    <button
                      onClick={() => {
                        this.setState({
                          readMoreMemeMining: !this.state.readMoreMemeMining,
                        });
                      }}
                    >
                      {this.state.readMoreMemeMining
                        ? 'Read less'
                        : 'Read more'}
                    </button>
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
