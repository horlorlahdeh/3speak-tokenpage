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
        <ReactWOW animation='slideInLeft'>
          <section className='SlideTwo'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-10 offset-md-1'>
                  <div className='Slide-Header'>
                    <h2 className='Slide-Title'>CREATE YOUR OWN VIDEO SITES</h2>
                    <p className='Slide-Title-Desc text-center'>
                      3Speak offers users the ability to create their own video
                      content sharing sites. These sites will allow u to create
                      and manage communities, tokens, content and issue your own
                      rare collectable memes. Creators of the sites will also
                      enjoy the following benefits;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className='cus-container'>
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
                        <p className='features-text'>
                          Cannot be shut down by anyone but the creator
                        </p>
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
                        <p className='features-text'>Self host your content</p>
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
                        <p className='features-text'>
                          Your community backs up and shares your content
                        </p>
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
                        <p className='features-text'>
                          Content is shared and connects into the 3Speak eco
                          system
                        </p>
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
                        <p className='features-text'>
                          Allow authorised users to upload their own content
                        </p>
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
                        <p className='features-text'>
                          Assign roles to users to curate the content
                        </p>
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
                        <p className='features-text'>
                          Manage your own communities
                        </p>
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
                        <p className='features-text'>
                          Issue your own tokens to create economies outside of
                          the system
                        </p>
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
                        <p className='features-text'>
                          Issue your own rare collectable Memes{' '}
                        </p>
                      </div>
                    </div>
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

export default Features;
