import React, { Component } from 'react';
import './assets/styles/BuiltWithHive.css';
import HiveLogo from './assets/images/hive-logo.png';


export default class BuiltWithHive extends Component {
  render() {
    return (
      <div>
        <section
          className='section-light'
          style={{ marginTop: '50px', marginBottom: '50px' }}
        >
          <div className='container'>
            <div className='section-wrapper'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='svg-gears'>
                    <div className='coins-img hive-icon'>
                      <img
                        className='hive-logo-section'
                        alt='hive logo'
                        src={HiveLogo}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='section-header'>
                    <h2 className='section-hive-title'>Built With HIVE</h2>
                  </div>
                  <div className='desc'>
                    <p className='desc-text'>
                      3Speak uses the Hive blockchain to reward its users and
                      store much of its content immutably.
                    </p>
                    <div className='action-button'>
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
