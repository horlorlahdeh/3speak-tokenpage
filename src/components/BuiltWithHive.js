import React, { Component } from 'react';
import './assets/styles/BuiltWithHive.css';

export default class BuiltWithHive extends Component {
  render() {
    return (
      <div>
        <section
          class='section-light'
          style={{ marginTop: '50px', marginBottom: '50px' }}
        >
          <div class='container'>
            <div class='section-wrapper'>
              <div class='row'>
                <div class='col-md-6'>
                  <div class='svg-gears'>
                    <div class='coins-img hive-icon'>
                      <img
                        className='hive-logo-section'
                        src='https://hive.cdn.3speakcontent.co/hive-branding/logo/png/logo_transparent@1.png'
                        alt='hive logo'
                      />
                    </div>
                  </div>
                </div>
                <div class='col-md-6'>
                  <div class='section-header'>
                    <h2 class='section-hive-title'>Built With HIVE</h2>
                  </div>
                  <div class='desc'>
                    <p class='desc-text'>
                      3Speak uses the Hive blockchain to reward its users and
                      store much of its content immutably.
                    </p>
                    <div class='action-button'>
                      
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='hive-feature-card'>
                            <li className='each-hive-feature'>
                              <img
                                alt='Features'
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                              />{' '}
                              Fast Transactions
                            </li>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='hive-feature-card'>
                            <li className='each-hive-feature'>
                              <img
                                alt='Features'
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                              />{' '}
                              Free Transactions
                            </li>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='hive-feature-card'>
                            <li className='each-hive-feature'>
                              <img
                                alt='Features'
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                              />{' '}
                              Smart Media Tokens
                            </li>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='hive-feature-card'>
                            <li className='each-hive-feature'>
                              <img
                                alt='Features'
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                              />{' '}
                              Decentralised
                            </li>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='hive-feature-card'>
                            <li className='each-hive-feature'>
                              <img
                                alt='Features'
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABlUlEQVRYhe2VQU7CQBSG/0fdutFIXLAwtDEsIG7dmVCiR/ASwFp23oAE6imMJyhoPIKBmAZow84EEhJwaTrPBRRJA7ZlWhOVf9NmZjLf1/faDrDLfw+tG9S0SkYQ6gRcAdiXZEwZMFOMm8GgaQcKaFolA8ILAweSYH9e7f5hAbgVq4Mp/ypBqCcAH0HQtR++VmBR9rjhum03uien5VygAOR7vpoxK1zy4AroKYxAnHDdsYzOEs44/imBUPCkBELDkxCIBAeAvQibjxbX9MZ5QbrTb3ZVtZoHc/ubtcuErcCYFS65xBcA3jbNLz81hc0w8CgCAIBhz7Bc4qJPInLZtxE4Ipfa2Vy54JOQgkcR8CRaqlrND3uGBUGXEFR0LKOjqtW8wvQcFQ5EewkBII0UP2ZzZd22Gh0AmP9e2QSH67msAPDVDl0IfGxTdlkBT6KlzO+3enJZAWmwlyQPo98r8J4gbxpGwEyKTqBWoAArokbAJH44JsJFLVDAse56YJyB6B7ALAb2jEAPwqVzx2n0Y9hvlz+WT8Ucvg6B/WWOAAAAAElFTkSuQmCC'
                              />{' '}
                              Free Speech
                            </li>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
