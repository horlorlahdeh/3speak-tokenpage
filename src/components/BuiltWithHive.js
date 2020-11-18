import React, { Component } from 'react';
import './assets/styles/BuiltWithHive.css';
import HiveLogo from './assets/images/hive-logo.png';

export default class BuiltWithHive extends Component {
  render() {
    return (
      <div>
        <section
          className='section-light'
          style={{ marginTop: '50px', marginBottom: '90px' }}
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
                        style={{ marginBottom: '22px' }}
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
                              
                              Fast Transactions
                            </li>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='hive-feature-card'>
                            <li className='each-hive-feature'>
                              
                              Free Transactions
                            </li>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='hive-feature-card'>
                            <li className='each-hive-feature'>
                              
                              Smart Media Tokens
                            </li>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='hive-feature-card'>
                            <li className='each-hive-feature'>
                              
                              Decentralised
                            </li>
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='hive-feature-card'>
                            <li className='each-hive-feature'>
                              
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
