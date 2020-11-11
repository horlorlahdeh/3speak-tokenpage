import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import NFTMining from './assets/images/nft_mining.png';
import './assets/styles/Influencers.css';

export class MemeNftMining extends Component {
  render() {
    return (
      <div className='Top-Div' style={{ marginTop: 90 }}>
        <ReactWOW animation='slideInLeft'>
          <section className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>CREATOR MEME (NFT) MINING</h2>
                    <p className='Slide-Title-Desc text-center'>
                      Make community or content creator Memes into collectables
                      with NFT's and issue them to the token holders who stake
                      the most of a communities' or a creator's token. Users can
                      earn collectable memes by staking the tokens of a creator
                      or a community
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <ReactWOW animation='flipInX'>
                  <div className='col-md-7'>
                    <img
                      src={NFTMining}
                      alt='Token System'
                      style={{ width: '100%' }}
                      className='mt-3'
                    />
                    <hr className='mt-2' />
                    <div className='row' style={{ marginBottom: '18px' }}>
                      <div className='col-md-12'>
                        <strong>NOTE:</strong> Staking a creator's token to mine
                        NFT Memes is the a similar idea to holding a stock and
                        receiving dividends
                      </div>
                    </div>
                  </div>
                </ReactWOW>
                <div className='col-md-5'>
                  <div className='Sub-Slide-Header' style={{ marginTop: '0' }}>
                    <div className='row'>
                      <div className='col-12'>
                        <h5>
                          NFT Memes are like rare, collectable football cards
                          and can hold significant value
                        </h5>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-1'>
                            <img
                              alt='Features'
                              src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                            />
                          </div>
                          <div className='col-10'>
                            Users can earn collectable memes by staking the
                            tokens of a creator or a community
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
                            Collect your favourite Memes by displaying them on
                            the front ends of your community or creators
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
                            NFT Meme collectables will drive demand for the
                            creator's tokens and create a new value capture
                            mechanism, similar to how stocks capture value for
                            investors, except this will be like the stock market
                            for individuals and communities
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
                            Prove the authenticity of your collectable meme NTF
                            by being able to verify that its original issuer was
                            the creator themselves
                          </div>
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

export default MemeNftMining;
