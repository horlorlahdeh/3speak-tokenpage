import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import ReactWOW from 'react-wow';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './assets/styles/SlideTwo.css';

export class Features extends Component {
  render() {
    // let settings = {
    //   dots: true,
    //   infinite: true,
    //   autoplay: true,
    //   autoplaySpeed: 1000,
    //   centerPadding: '10px',
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };

    return (
      <div className='Slide-Two-Wrapper'>
       
          <section className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>3SPEAK FEATURES</h2>
                    <p className='Slide-Title-Desc text-center'>
                      3Speak offers users various benefits and advantages based
                      on some specific features that separates it from other
                      video sharing platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
       
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='row'>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Account owned on blockchain level</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Live Streaming</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>High performance</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Censorship Resistant</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>HD Videos</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Simple to Use</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Fast Encoding on Desktop</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Local encoding option</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Citizen Journalism </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Leader Board System </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Engagement Rewards </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    <div className='col-1'>
                      <img
                          alt='Features'
                          src='https://img.icons8.com/material-rounded/12/000000/horizontal-line.png'
                        />
                    </div>
                    <div className='col-11'>
                      <p className='features-text'>Decentralised Autonomous Organisation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
