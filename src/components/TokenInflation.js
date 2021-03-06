import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './assets/styles/TokenInflation.css';

class TokenInflation extends Component {
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
                    <h2 className='Slide-Title'>MINE REWARDS FOR CONTRIBUTING TO THE SYSTEM</h2>
                    <p className='Slide-Title-Desc text-center'>
                      3Speak provides the ability for any video platform, content creator or individual user to help secure the network by storing video files, validating token transactions or running service nodes within our back up storage network.  Participating in these activities allows you to become a miner in the network and earn rewards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
       
        <div className='container'>
         
            <div className='row entire-row' data-wow-offset='100000'>
              <div className='col-md-3'>
                <div className='token-inflation-card own-card'>
                  <div className='own-card-icon'>
                    
                      <img
                        className='account-img'
                        src='https://img.icons8.com/bubbles/100/000000/stack.png'
                        alt='Account Icon'
                      />
                   
                  </div>
                  <div className='own-card-title'>
                    <h4>Video Storage Nodes</h4>
                  </div>
                  <div className='token-inflation-card-body'>
                    <p>
                      All individuals running a storage node in the
                      decentralized system will get a share of the token
                      distribution
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='token-inflation-card token-inflation-card-2 own-card'>
                  <div className='own-card-icon'>
                    
                      <img
                        className='community-img'
                        src='https://img.icons8.com/bubbles/100/000000/api.png'
                        alt='Community Icon'
                      />
                   
                  </div>
                  <div className='own-card-title'>
                    <h4>Independent Video Platforms</h4>
                  </div>
                  <div className='token-inflation-card-body'>
                    <p>
                      All independent video platforms like 3Speak will have a
                      share of token distribution
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='token-inflation-card token-inflation-card-3 own-card'>
                  <div className='own-card-icon'>
                   
                      <img
                        className='assets-img'
                        width='100'
                        src='https://img.icons8.com/bubbles/100/000000/safe.png'
                        alt='Digital Assets'
                      />
                    
                  </div>
                  <div className='own-card-title'>
                    <h4>Individual Local Storage</h4>
                  </div>
                  <div className='token-inflation-card-body'>
                    <p>
                      Users storing data locally using their desktop application
                      will also earn some tokens from distribution.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='token-inflation-card token-inflation-card-4 own-card'>
                  <div className='own-card-icon'>
                    
                      <img
                        className='assets-img'
                        width='100'
                        src='https://img.icons8.com/bubbles/100/000000/gift.png'
                        alt='Digital Assets'
                      />
                   
                  </div>
                  <div className='own-card-title'>
                    <h4>Bonus System</h4>
                  </div>
                  <div className='token-inflation-card-body'>
                    <p>
                      Positive actors in our ecosystem gain incentives from
                      inflation for achieving various positive actions for the
                      network
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    );
  }
}

export default TokenInflation;
