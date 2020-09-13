import React, { Component } from 'react';
// import Censorship from "./assets/images/censorship.png";
// import Decentralized from "./assets/images/decentralized.png";
import World from './assets/images/world.png';
// import ReactDOM from "react-dom";
import ReactWOW from 'react-wow';

import './assets/styles/SlideOne.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

export class SlideOne extends Component {
  render() {
    return (
      <div className='Slide-One-Wrapper'>
        <div className='bg-div'></div>
        <div className='bg-div2'></div>
        <ReactWOW animation='slideInLeft'>
          <section className='SlideOne'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>
                      CURRENT SITUATION WITH ONLINE MEDIA
                    </h2>
                    <p className='Slide-Title-Desc text-center'>
                      Web 2.0 poses some set of challenges common on traditional
                      web and social interfaces. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Praesent rhoncus ultricies
                      nibh, vitae sodales purus. Aenean.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ReactWOW>
        <ReactWOW animation=''>
          <div className='choose-us-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-7'>
                  {/*<div className="choose-us-title">
                    <h2> Why Choose Us?</h2>
                    <p>
                      Cum sociis natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Quisque lacus dui,
                      interdum sit amet varius.
                    </p>
                  </div>*/}

                  <div className='choose-us-des'>
                    <div className='choose-us-item'>
                      <ReactWOW
                        animation='bounceIn'
                        data-wow-offset='50'
                        data-wow-duration='2s'
                        data-wow-delay='1s'
                      >
                        <div className='first'>
                          <div className='icon-wrapper'>
                            {/* <ReactWOW animation="slideInUp"> */}
                            <FontAwesomeIcon
                              className='FontAwesomeIcon'
                              icon={faArrowAltCircleRight}
                            />
                            {/* </ReactWOW> */}
                          </div>

                          <h3>LACK OF ENTERPRISE GRADE YOUTUBE COMPETITION</h3>
                          <p>
                            Lorem Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Quisque
                            lacus dui, interdum sit amet varius
                          </p>
                        </div>
                      </ReactWOW>
                    </div>
                    <div className='choose-us-item'>
                      <ReactWOW
                        animation='bounceIn'
                        data-wow-offset='50'
                        data-wow-duration='2s'
                        data-wow-delay='2s'
                      >
                        <div className='second'>
                          <div className='icon-wrapper'>
                            <FontAwesomeIcon
                              className='FontAwesomeIcon'
                              icon={faArrowAltCircleRight}
                            />
                          </div>

                          <h3>
                            SLIPPERY SLOPE TO CENSORSHIP AND AUTHORITARIANISM
                          </h3>
                          <p>
                            Lorem Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Quisque
                            lacus dui, interdum sit amet varius
                          </p>
                        </div>
                      </ReactWOW>
                    </div>
                    <div className='choose-us-item'>
                      <ReactWOW
                        animation='bounceIn'
                        data-wow-duration='2s'
                        data-wow-delay='3s'
                      >
                        <div className='third'>
                          <div className='icon-wrapper'>
                            <FontAwesomeIcon
                              className='FontAwesomeIcon'
                              icon={faArrowAltCircleRight}
                            />
                          </div>

                          <h3>CREATORS BEING ACTIVELY CENSORED</h3>
                          <p>
                            Lorem Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Quisque
                            lacus dui, interdum sit amet varius
                          </p>
                        </div>
                      </ReactWOW>
                    </div>
                    <div className='choose-us-item'>
                      <ReactWOW
                        animation='bounceIn'
                        data-wow-duration='2s'
                        data-wow-delay='4s'
                      >
                        <div className='fourth'>
                          <div className='icon-wrapper'>
                            <FontAwesomeIcon
                              className='FontAwesomeIcon'
                              icon={faArrowAltCircleRight}
                            />
                          </div>

                          <h3>LEADS TO EXTREMISM</h3>
                          <p>
                            Lorem Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Quisque
                            lacus dui, interdum sit amet varius
                          </p>
                        </div>
                      </ReactWOW>
                    </div>
                  </div>
                </div>
                <div className='col-md-5'>
                  <div className='Censorship-Image-Wrapper'>
                    <ReactWOW
                      animation='shake'
                      data-wow-duration='2s'
                      data-wow-delay='4s'
                    >
                      <img
                        className='Censorship-Image'
                        src={World}
                        alt='iphone'
                      />
                    </ReactWOW>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReactWOW>
      </div>
    );
  }
}

export default SlideOne;
