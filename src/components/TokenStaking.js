import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import TokenSystem from './assets/images/token_system.png';
import './assets/styles/Influencers.css';

export class TokenStaking extends Component {
  render() {
    return (
      <div className='Top-Div' style={{ marginTop: 90 }}>
        <ReactWOW animation='slideInLeft'>
          <section className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>TOKEN STAKING</h2>
                    <p className='Slide-Title-Desc text-center'>
                      Staking tokens gets you the following benefits: Platform
                      influence, Longer staking period = higher rewards, receive
                      beneficiaries from all other network platforms,
                    </p>
                  </div>
                </div>
              </div>
              <div className='row'>
                <ReactWOW animation='flipInX'>
                  <div className='col-md-7'>
                    <img
                      src={TokenSystem}
                      alt='Token System'
                      style={{ width: '100%' }}
                    />
                  </div>
                </ReactWOW>
                <div className='col-md-5'>
                  <div className='Sub-Slide-Header'>
                    <h3 className='Tokenise-Title'>
                      The following users will need to stake tokens in order to
                      take part in the network:{' '}
                    </h3>
                    <div className='row'>
                      <div className='col-12'>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-1'>
                            <img
                              alt='token system'
                              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                            />
                          </div>
                          <div className='col-10'>Full Node Validators</div>
                        </div>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-1'>
                            <img
                              alt='token system'
                              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                            />
                          </div>
                          <div className='col-10'>
                            Independent Creator Sites / Communities
                          </div>
                        </div>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-1'>
                            <img
                              alt='token system'
                              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                            />
                          </div>
                          <div className='col-10'>
                            IVP’s (Independent Video Platforms)
                          </div>
                        </div>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-1'>
                            <img
                              alt='token system'
                              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                            />
                          </div>
                          <div className='col-10'>Token Creators</div>
                        </div>
                        <div className='row' style={{ marginBottom: '8px' }}>
                          <div className='col-1'>
                            <img
                              alt='token system'
                              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                            />
                          </div>
                          <div className='col-10'>NFT Meme Mining</div>
                        </div>
                        <div className='row'>
                          <div className='col-1'>
                            <img
                              alt='token system'
                              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
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
