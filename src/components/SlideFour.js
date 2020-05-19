import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ReactWOW from "react-wow";
import EcoImage from './assets/images/eco-system.png';

import './assets/styles/SlideFour.css';

export class SlideFour extends Component {
    render() {
        return (
          <div className="Slide-Four-Wrapper">
            {/* <div className="bg-div"></div> */}
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-5">
                  <div className="eco-image">
                    <img src={EcoImage} alt="ECO Image" width="100%" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="eco-features">
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <div className="eco-card">
                          <div className="row">
                            <div className="col-2">
                              <img src="https://img.icons8.com/color/48/000000/check-all.png" />
                            </div>
                            <div className="col-10">
                              <h4 className="eco-title-desc">
                                VIDEO PLATFORMS
                              </h4>
                              <p className="eco-desc">
                                social interfaces. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="eco-card">
                          <div className="row">
                            <div className="col-2">
                              <img src="https://img.icons8.com/color/48/000000/check-all.png" />
                            </div>
                            <div className="col-10">
                              <h4 className="eco-title-desc">
                                INDEPENDENT CREATORS
                              </h4>
                              <p className="eco-desc">
                                social interfaces. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-md-6">
                        <div className="eco-card">
                          <div className="row">
                            <div className="col-2">
                              <img src="https://img.icons8.com/color/48/000000/check-all.png" />
                            </div>
                            <div className="col-10">
                              <h4 className="eco-title-desc">DAO PLATFORMS</h4>
                              <p className="eco-desc">
                                social interfaces. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="eco-card">
                          <div className="row">
                            <div className="col-2">
                              <img src="https://img.icons8.com/color/48/000000/check-all.png" />
                            </div>
                            <div className="col-10">
                              <h4 className="eco-title-desc">MEDIA SITES</h4>
                              <p className="eco-desc">
                                social interfaces. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          </div>
        );
    }
}

export default SlideFour
