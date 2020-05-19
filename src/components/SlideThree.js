import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactWOW from "react-wow";

import "./assets/styles/SlideThree.css";

export class SlideThree extends Component {
  render() {
    return (
      <div className="Slide-Three-Wrapper">
        <ReactWOW animation="slideInLeft">
          <div className="SlideTwo">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <div className="Slide-Header">
                    <h2 className="Slide-Title">TOKENOMICS OF MEDIA CHAINS</h2>
                    <p className="Slide-Title-Desc text-center">
                      Web 2.0 poses some set of challenges common on traditional
                      web and social interfaces. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Praesent rhoncus ultricies
                      nibh, vitae sodales purus. Aenean.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReactWOW>
        <div className="tokenomics-info">
          <div className="container">
            <div className="row token-utitlity-row">
              <ReactWOW animation="flipInX">
                <div className="col-md-4 tokenomics-card-wait">
                  <div className="tokenomics-card text-center">
                    <img
                      className="tokenomics-img"
                      src="https://img.icons8.com/color/96/000000/wallet.png"
                      alt="Money Image"
                    />
                    <h6 className="tokenomics-header">
                      STAKE BASED VOTING RIGHTS
                    </h6>
                    <p className="tokenomics-desc text-center">
                      Sinterfaces. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit
                    </p>
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="flipInX">
                <div className="col-md-4 tokenomics-card-wait">
                  <div className="tokenomics-card text-center">
                    <img
                      className="tokenomics-img"
                      src="https://img.icons8.com/color/96/000000/gift.png"
                      alt="Tipping Image"
                    />
                    <h6 className="tokenomics-header">IMMUTABLE TIPPINGS</h6>
                    <p className="tokenomics-desc text-center">
                      Sinterfaces. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit
                    </p>
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="flipInX">
                <div className="col-md-4 tokenomics-card-wait">
                  <div className="tokenomics-card text-center">
                    <img
                      className="tokenomics-img"
                      src="https://img.icons8.com/color/96/000000/key-exchange.png"
                      alt="Money Image"
                    />
                    <h6 className="tokenomics-header">DELEGATE TOKENS</h6>
                    <p className="tokenomics-desc text-center">
                      Sinterfaces. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit
                    </p>
                  </div>
                </div>
              </ReactWOW>
            </div>
            <div className="row token-utitlity-row">
              <ReactWOW animation="flipInX">
                <div className="col-md-4 tokenomics-card-wait">
                  <div className="tokenomics-card text-center">
                    <img
                      className="tokenomics-img"
                      src="https://img.icons8.com/color/96/000000/player-change.png"
                      alt="Money Image"
                    />
                    <h6 className="tokenomics-header">ASSIGN OWNERSHIP</h6>
                    <p className="tokenomics-desc text-center">
                      Sinterfaces. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit
                    </p>
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="flipInX">
                <div className="col-md-4 tokenomics-card-wait">
                  <div className="tokenomics-card text-center">
                    <img
                      className="tokenomics-img"
                      src="https://img.icons8.com/color/96/000000/commercial.png"
                      alt="Tipping Image"
                    />
                    <h6 className="tokenomics-header">MARKETING</h6>
                    <p className="tokenomics-desc text-center">
                      Sinterfaces. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit
                    </p>
                  </div>
                </div>
              </ReactWOW>
              <ReactWOW animation="flipInX">
                <div className="col-md-4 tokenomics-card-wait">
                  <div className="tokenomics-card text-center">
                    <img
                      className="tokenomics-img"
                      src="https://img.icons8.com/color/96/000000/card-security.png"
                      alt="Money Image"
                    />
                    <h6 className="tokenomics-header">SUBSCRIPTIONS</h6>
                    <p className="tokenomics-desc text-center">
                      Sinterfaces. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit
                    </p>
                  </div>
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideThree;
